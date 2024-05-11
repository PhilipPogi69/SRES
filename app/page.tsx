'use client';

import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import Image, { StaticImageData } from 'next/image';
import Logo from '../public/Technological_University_of_the_Philippines_Seal.svg.png';
import Link from 'next/link';

const NavBar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const expandedWidth = 250; // Width of the nav bar when expanded
    const collapsedWidth = 120; // Width of the nav bar when collapsed

    return (
        <div
            style={{
                display: 'flex',
                backgroundColor: '#f3f3f3', // Set the background color of the entire website to grey
                minHeight: '100vh', // Ensure the background color applies to the entire height
                transition: 'background-color 0.8s ease', // Smooth transition of background color
            }}
        >
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovered ? `${expandedWidth}px` : `${collapsedWidth}px`,
                    height: '100vh',
                    backgroundColor: '#fff',
                    transition: 'width 0.8s ease', // Smooth transition on width change
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
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '100%',
                    }}
                >
                    <div style={{ flexGrow: 1 }}>
                        <NavItem
                            text="TUP MANILA"
                            isHovered={isHovered}
                            logo={Logo} icon={undefined}
                        />
                        <NavItem
                            icon={<MdOutlineSpaceDashboard style={{ fontSize: '30px' }} />}
                            text="Dashboard"
                            isHovered={isHovered}
                        />
                        <NavItem
                            icon={<FaRegMessage style={{ fontSize: '30px' }} />}
                            text="Message"
                            isHovered={isHovered}
                        />
                        <NavItem
                            icon={<HiOutlineDocumentReport style={{ fontSize: '30px' }} />}
                            text="Report"
                            isHovered={isHovered}
                        />
                        <NavItem
                            icon={<SiGoogleclassroom style={{ fontSize: '30px' }} />}
                            text="Attendance"
                            isHovered={isHovered}
                        />
                        <NavItem
                            icon={<IoSettingsOutline style={{ fontSize: '30px' }} />}
                            text="Setting"
                            isHovered={isHovered}
                        />
                    </div>
                    <NavItem
                        icon={<IoIosLogOut style={{ fontSize: '30px' }} />}
                        text="Log out"
                        isHovered={isHovered}
                    />
                </ul>
            </nav>
            <div
                style={{
                    marginLeft: isHovered ? `${expandedWidth}px` : `${collapsedWidth}px`,
                    padding: '20px',
                    width: '100%',
                    backgroundColor: '#f3f3f3', // Set the background of the website to grey
                    transition: 'margin-left 0.8s ease', // Smooth transition on margin change
                }}
            >
                <section className="attendance">
                    <div
                        className="attendance-list"
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginTop: '10px',
                            background: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 20px 35px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.8s ease',
                        }}
                    >
                        <h1
                            style={{
                                textTransform: 'uppercase', // Make the text uppercase
                                fontSize: '24px', // Set a larger font size
                                color: 'black', // Make the color black
                            }}
                        >
                            Student List
                        </h1>
                        <div
                            style={{
                                overflowX: 'auto', // Allow horizontal scrolling
                                borderRadius: '5px 5px 0 0',
                            }}
                        >
                            <table
                                style={{
                                    borderCollapse: 'collapse',
                                    margin: '25px 0',
                                    fontSize: '15px',
                                    width: '100%', // Allow table to occupy full width
                                    overflow: 'hidden',
                                    color: 'black', // Set the text color to black
                                }}
                            >
                                <thead>
                                    <tr
                                        style={{
                                            background: '#cf3232',
                                            textAlign: 'left',
                                            color: '#fff',
                                            transition: 'background-color 0.8s ease', // Smooth transition of background color
                                        }}
                                    >
                                        <th style={{ padding: '12px 15px' }}>Student ID</th>
                                        <th style={{ padding: '12px 15px' }}>Name</th>
                                        <th style={{ padding: '12px 15px' }}>College</th>
                                        <th style={{ padding: '12px 15px' }}>Course</th>
                                        <th style={{ padding: '12px 15px' }}>Year</th>
                                        <th style={{ padding: '12px 15px' }}>Units</th>
                                        <th style={{ padding: '12px 15px' }}>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '12px 15px' }}>TUPM-21-0001</td>
                                        <td style={{ padding: '12px 15px' }}>Antonio Cruz</td>
                                        <td style={{ padding: '12px 15px' }}>Science</td>
                                        <td style={{ padding: '12px 15px' }}>BSCS-NS</td>
                                        <td style={{ padding: '12px 15px' }}>Third</td>
                                        <td style={{ padding: '12px 15px' }}>--</td>
                                        <td>
                                            <Link href="/Grades">
                                                <button
                                                    style={{
                                                        padding: '6px 20px',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        background: 'transparent',
                                                        border: '1px solid #cf3232',
                                                        transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#cf3232';
                                                        e.currentTarget.style.color = '#fff';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'transparent';
                                                        e.currentTarget.style.color = 'black';
                                                    }}
                                                >
                                                    View
                                                </button>
                                            </Link>
                                        </td>
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

const NavItem: React.FC<{ icon: React.ReactNode; text: string; isHovered: boolean; logo?: string | StaticImageData }> = ({
    icon,
    text,
    isHovered,
    logo,
}) => {
    const [itemHovered, setItemHovered] = useState(false);

    const handleMouseEnter = () => setItemHovered(true);
    const handleMouseLeave = () => setItemHovered(false);

    const isTupManila = text === 'TUP MANILA';

    return (
        <li style={{ width: '100%' }}>
            {isTupManila ? (
                <a
                    href="#"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: isHovered ? 'flex-start' : 'center',
                        color: itemHovered ? '#cf3232' : 'black',
                        fontSize: '20px',
                        padding: '10px',
                        paddingLeft: isHovered ? '40px' : '0',
                        paddingBottom: isHovered ? '20px' : '0',
                        paddingTop: isHovered ? '20px' : '0',
                        transition: 'all 0.5s ease-in-out',
                        marginBottom: '45px',
                        backgroundColor: !isTupManila && itemHovered ? '#f3f3f3' : 'transparent',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                >
                    {logo ? (
                        <Image src={logo} alt="TUP Logo" width={40} height={40} />
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: isHovered ? '10px' : '0',
                            }}
                        >
                            {icon}
                        </div>
                    )}
                    <span
                        style={{
                            marginLeft: isHovered ? '10px' : '0',
                            color: itemHovered ? '#cf3232' : 'black',
                            fontWeight: 'normal', // Change fontWeight to 'normal'
                            transition: 'all 0.5s ease-in-out',
                            display: isHovered ? 'block' : 'none',
                        }}
                    >
                        {text}
                    </span>
                </a>
            ) : (
                <a
                    href="#"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: isHovered ? 'flex-start' : 'center',
                        color: itemHovered ? '#cf3232' : 'black',
                        fontSize: '20px',
                        padding: '10px',
                        paddingLeft: isHovered ? '40px' : '0',
                        paddingBottom: isHovered ? '20px' : '0',
                        paddingTop: isHovered ? '20px' : '0',
                        transition: 'all 0.5s ease-in-out',
                        marginBottom: '45px',
                        backgroundColor: itemHovered ? '#f3f3f3' : 'transparent',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: isHovered ? '10px' : '0',
                        }}
                    >
                        {icon}
                    </div>
                    <span
                        style={{
                            marginLeft: isHovered ? '10px' : '0',
                            color: itemHovered ? '#cf3232' : 'black',
                            fontWeight: 'normal', // Change fontWeight to 'normal'
                            transition: 'all 0.5s ease-in-out',
                            display: isHovered ? 'block' : 'none',
                        }}
                    >
                        {text}
                    </span>
                </a>
            )}
        </li>
    );
};

export default NavBar;
