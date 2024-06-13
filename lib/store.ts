import {
  ACCESSLEVEL,
  GradesTemplate,
  StudentGrades,
  User,
} from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Department {
  name: string;
}

interface College {
  name: string;
  departments: Department[];
}

export const colleges: College[] = [
  {
    name: "College of Industrial Education",
    departments: [
      { name: "Home Economics" },
      { name: "Professional Industrial Education" },
      { name: "Student Teaching" },
      { name: "Technical Arts" },
    ],
  },
  {
    name: "College of Engineering",
    departments: [
      { name: "Civil Engineering" },
      { name: "Electrical Engineering" },
      { name: "Electronics Communication Engineering" },
      { name: "Mechanical Engineering" },
    ],
  },
  {
    name: "College of Liberal Arts",
    departments: [
      { name: "Entrepreneurship and Management Department" },
      { name: "Languages Department" },
      { name: "Physical Education" },
      { name: "Social Science Department" },
    ],
  },
  {
    name: "College of Science",
    departments: [
      { name: "Chemistry Department" },
      { name: "Computer Studies" },
      { name: "Mathematics Department" },
      { name: "Physics Department" },
    ],
  },
  {
    name: "College of Architecture and Fine Arts",
    departments: [
      { name: "Architecture Department" },
      { name: "Fine Arts Department" },
      { name: "Graphics Department" },
    ],
  },
  {
    name: "College of Industrial Technology",
    departments: [
      { name: "Basic Industrial Technology" },
      { name: "Civil Engineering Technology" },
      { name: "Electrical Engineering Technology" },
      { name: "Electronics Engineering Technology" },
      { name: "Food and Apparel Technology" },
      { name: "Graphics Arts and Printing Technology" },
      { name: "Mechanical Engineering Technology" },
      { name: "Powerplant Engineering Technology" },
    ],
  },
];

interface ModalStore {
  isVisble: boolean;
  header: string;
  content: string;
  redirectUrl: string;
  makeVisible: () => void;
  makeInvinsible: () => void;
  updateModal: ({
    header,
    content,
    redirectUrl,
  }: {
    header: string;
    content: string;
    redirectUrl?: string;
  }) => void;
}

interface userDataStore {
  userData: Partial<User>;
  flushData: () => void;
  updateData: (userData: User) => void;
}

export const useCurrentUserStore = create<userDataStore>()(
  persist(
    (set, get) => ({
      userData: {
        accessLevel: ACCESSLEVEL.VISITOR,
        dateOfBirth: new Date(Date.now()),
        email: "",
        username: "",
      },
      flushData() {
        set({
          userData: {
            accessLevel: ACCESSLEVEL.VISITOR,
            dateOfBirth: new Date(Date.now()),
            id: "",
            username: "",
          },
        });
      },
      updateData(userData) {
        set({ userData: { id: userData.id, username: userData.username } });
      },
    }),
    {
      name: "userData", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

interface CrateClassModalStore {
  isHidden: boolean;
  Hide: () => void;
  Show: () => void;
}

export const useCrateClassModalStore = create<CrateClassModalStore>()(
  (set) => ({
    isHidden: true,
    Hide() {
      set({ isHidden: true });
    },
    Show() {
      set({ isHidden: false });
    },
  })
);

export const useModalStore = create<ModalStore>()((set) => ({
  header: "",
  content: "",
  isVisble: false,
  redirectUrl: "",
  makeVisible: () => {
    set((state) => ({ isVisble: true }));
  },
  makeInvinsible: () => {
    set((state) => ({ isVisble: false }));
  },
  updateModal: ({
    header,
    content,
    redirectUrl,
  }: {
    header: string;
    content: string;
    redirectUrl?: string;
  }) => {
    set((state) => ({
      ...state,
      header: header,
      content: content,
      redirectUrl: redirectUrl,
    }));
  },
}));

interface CreateGradeTemplate {
  isPassed: boolean;
  data: GradesTemplate[];
  addItem: (item: GradesTemplate) => void;
  setPassed: (update: boolean) => void;
}

export const useCreateGradeTemplate = create<CreateGradeTemplate>()((set) => ({
  isPassed: false,
  data: [],
  addItem(item) {
    set((state) => ({ ...state, data: [...state.data, item] }));
  },
  setPassed(update) {
    set((state) => ({ ...state, isPassed: update }));
  },
}));

interface studentGradesStore {
  data: StudentGrades[];
  push: (data: StudentGrades) => void;
  udpate: (data: StudentGrades) => void;
  replace: (data: StudentGrades[]) => void;

  empty: () => void;
}

export const useStudentGradesScore = create<studentGradesStore>()((set) => ({
  data: [],

  push: (data) => {
    set((state) => ({ ...state, data: [...state.data, data] }));
  },
  empty: () => {
    set((state) => ({ ...state, data: [] }));
  },
  udpate: (data) => {
    set((state) => {
      const arr = state.data.filter(
        (obj) =>
          obj.gradesTemplateId !== data.gradesTemplateId &&
          obj.studentCurrentClassesId !== data.studentCurrentClassesId
      );

      return { ...state, data: [...arr, data] };
    });
  },
  replace: (data) => {
    set((state) => ({ ...state, data: data }));
  },
}));
