import pandas as pd
from faker import Faker

# Initialize Faker
fake = Faker()


# Function to generate a random student record
def generate_record(index):
    student_code = f"TUPM-21-{str(index).zfill(4)}"
    first_name = fake.first_name()
    last_name = fake.last_name()
    middle_name = fake.last_name()
    full_name = first_name + " " + middle_name[0].capitalize() + ". " + last_name
    birthday = fake.date_of_birth(minimum_age=18, maximum_age=25).strftime("%m/%d/%Y")
    email = fake.email()
    return {
        "studentCode": student_code,
        "fullName": full_name,
        "Birthday": birthday,
        "email": email,
        "password": last_name.upper(),
    }


# Generate 300 records
records = [generate_record(i) for i in range(0, 300)]

# Convert the records into a DataFrame
generated_data = pd.DataFrame(records)

# Save the generated data to an Excel file
output_file_path = "generated_names.xlsx"
generated_data.to_excel(output_file_path, index=False)

print(f"Generated data saved to {output_file_path}")
