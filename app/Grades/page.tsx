'use client';

import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Logo from '/public/Technological_University_of_the_Philippines_Seal.svg.png';

const Grades: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const expandedWidth = 250;
    const collapsedWidth = 120;

    return (
        <div style={{ display: 'flex', backgroundColor: '#f3f3f3', minHeight: '100vh', transition: 'background-color 0.8s ease' }}>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovered ? `${expandedWidth}px` : `${collapsedWidth}px`,
                    height: '100vh',
                    backgroundColor: '#fff',
                    transition: 'width 0.8s ease',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <NavItem text="TUP MANILA" isHovered={isHovered} logo={Logo} icon={undefined} />
                        <NavItem icon={<MdOutlineSpaceDashboard style={{ fontSize: '30px' }} />} text="Dashboard" isHovered={isHovered} />
                        <NavItem icon={<FaRegMessage style={{ fontSize: '30px' }} />} text="Message" isHovered={isHovered} />
                        <NavItem icon={<HiOutlineDocumentReport style={{ fontSize: '30px' }} />} text="Report" isHovered={isHovered} />
                        <NavItem icon={<SiGoogleclassroom style={{ fontSize: '30px' }} />} text="Attendance" isHovered={isHovered} />
                        <NavItem icon={<IoSettingsOutline style={{ fontSize: '30px' }} />} text="Setting" isHovered={isHovered} />
                    </div>
                    <NavItem icon={<IoIosLogOut style={{ fontSize: '30px' }} />} text="Log out" isHovered={isHovered} />
                </ul>
            </nav>
            <div style={{ marginLeft: isHovered ? `${expandedWidth}px` : `${collapsedWidth}px`, padding: '20px', width: '100%', backgroundColor: '#f3f3f3', transition: 'margin-left 0.8s ease' }}>
                <section className="attendance">
                    <div className="attendance-list" style={{ width: '100%', padding: '10px', marginTop: '10px', background: '#fff', borderRadius: '10px', boxShadow: '0 20px 35px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.8s ease' }}>
                        <h1 style={{ textTransform: 'uppercase', fontSize: '24px', color: 'black' }}>GRADE TRANSPARENSY</h1>
                        <div style={{ overflowX: 'auto', borderRadius: '5px 5px 0 0' }}>
                            <table style={{ borderCollapse: 'collapse', margin: '25px 0', fontSize: '14px', width: '100%', overflow: 'hidden', color: 'black' }}>
                                <thead>
                                <tr style={{ border: '1px solid #000', background: '#cf3232', textAlign: 'center', color: '#fff', transition: 'background-color 0.8s ease' }}>     
                                    <th colSpan={16} rowSpan={2}>Attendance</th>
                                    <th colSpan={2} rowSpan={2}>Recitation 10%</th>
                                    <th colSpan={2} rowSpan={2}>Assignment 10%</th>
                                    <th colSpan={3} rowSpan={2}>Reporting & Attitude 20%</th>
                                    <th colSpan={3} rowSpan={2}>Quiz</th>
                                    <th colSpan={1} rowSpan={2}>Total Class Standing 60%</th>
                                    <th colSpan={2} rowSpan={2}>Midterm 1-70 20%</th>
                                    <th colSpan={2} rowSpan={2}>Finals 1-100 20%</th>
                                    <th colSpan={1} rowSpan={2}>Total Grade</th>
                                    <th colSpan={1} rowSpan={2}>Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ background: '#dd6f6f', textAlign: 'center', transition: 'background-color 0.8s ease', color:'black' }}> 
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>1</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>2</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>3</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>4</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>5</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>6</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>7</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>8</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>9</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>10</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>11</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>12</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>13</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>14</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>15</td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}>16</td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}>Q1-20</td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}>Q2-10</td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}>Ave. 10%</td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                        <tr>
                                        <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', width: '30px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', textAlign: 'center' }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                            <td style={{ border: '1px solid #000',height: '60px', }}></td>
                                        </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const NavItem: React.FC<{ icon: React.ReactNode; text: string; isHovered: boolean; logo?: string | StaticImageData }> = ({ icon, text, isHovered, logo }) => {
    const [itemHovered, setItemHovered] = useState(false);

    const handleMouseEnter = () => setItemHovered(true);
    const handleMouseLeave = () => setItemHovered(false);

    const isTupManila = text === 'TUP MANILA';

    return (
        <li style={{ width: '100%' }}>
            {isTupManila ? (
                <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: isHovered ? 'flex-start' : 'center', color: itemHovered ? '#cf3232' : 'black', fontSize: '20px', padding: '10px', paddingLeft: isHovered ? '40px' : '0', paddingBottom: isHovered ? '20px' : '0', paddingTop: isHovered ? '20px' : '0', transition: 'all 0.5s ease-in-out', marginBottom: '45px', backgroundColor: !isTupManila && itemHovered ? '#f3f3f3' : 'transparent', borderRadius: '10px', width: '100%' }}>
                    {logo ? <Image src={logo} alt="TUP Logo" width={40} height={40} /> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: isHovered ? '10px' : '0' }}>{icon}</div>}
                    <span style={{ marginLeft: isHovered ? '10px' : '0', color: itemHovered ? '#cf3232' : 'black', fontWeight: 'normal', transition: 'all 0.5s ease-in-out', display: isHovered ? 'block' : 'none' }}>{text}</span>
                </a>
            ) : (
                <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: isHovered ? 'flex-start' : 'center', color: itemHovered ? '#cf3232' : 'black', fontSize: '20px', padding: '10px', paddingLeft: isHovered ? '40px' : '0', paddingBottom: isHovered ? '20px' : '0', paddingTop: isHovered ? '20px' : '0', transition: 'all 0.5s ease-in-out', marginBottom: '45px', backgroundColor: itemHovered ? '#f3f3f3' : 'transparent', borderRadius: '10px', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: isHovered ? '10px' : '0' }}>{icon}</div>
                    <span style={{ marginLeft: isHovered ? '10px' : '0', color: itemHovered ? '#cf3232' : 'black', fontWeight: 'normal', transition: 'all 0.5s ease-in-out', display: isHovered ? 'block' : 'none' }}>{text}</span>
                </a>
            )}
        </li>
    );
};

export default Grades;
