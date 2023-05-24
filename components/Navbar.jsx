import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsChevronDown, BsSearch, } from 'react-icons/bs'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ logo, show, theme }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <nav className='flex py-6 items-center justify-between lg:hidden'>
                <div className="logo">
                    <Image src={logo} width={168} height={39} alt='logo' />
                </div>

                <div className={`flex space-x-8 ${theme} font-medium`}>
                    <Menu>
                        <MenuButton className=''>
                            <div className='flex items-center text-sm'>
                                <span>Nanodegree</span> <BsChevronDown className='ml-2' />
                            </div>

                        </MenuButton>
                        <MenuList>
                            <MenuItem as='a' href='#'>Link 1</MenuItem>
                            <MenuItem as='a' href='#'>Link 2</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton className=''>
                            <div className='flex items-center text-sm'>
                                <span>Course</span> <BsChevronDown className='ml-2' />
                            </div>

                        </MenuButton>
                        <MenuList>
                            <MenuItem as='a' href='#'>Link 1</MenuItem>
                            <MenuItem as='a' href='#'>Link 2</MenuItem>
                        </MenuList>
                    </Menu>

                    <div className={`flex items-center ${show}`}>
                        <BsSearch className=' text-sm' />
                        <input type="text" placeholder='Search Courses' className='w-36 -ml-2 outline-none px-4 py-2 bg-white bg-opacity-0 text-gray text-sm' />
                    </div>

                    <Menu>
                        <MenuButton className=''>
                            <div className='flex items-center  text-sm'>
                                <span>Company</span> <BsChevronDown className='ml-2' />
                            </div>

                        </MenuButton>
                        <MenuList>
                            <MenuItem as='a' href='#'>Link 1</MenuItem>
                            <MenuItem as='a' href='#'>Link 2</MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className='flex items-center space-x-6'>
                    <Link className='text-[#1089FE] text-sm' href='/teach'>
                        Teach on Edukarma
                    </Link>

                    <Link className='bg-[#1089FE] text-white py-3 px-8 rounded-lg text-sm' href='/login'>
                        Take Quiz
                    </Link>
                </div>
            </nav>

            <nav className='hidden lg:flex flex-col  py-4'>
                <div className='flex  justify-between'>
                    <div className="logo">
                        <Image src={logo} width={168} height={39} alt='logo' />
                    </div>
                    <button
                        onClick={toggle}
                        className="text-white  focus:outline-none "
                        >
                        <FaBars className='text-white text-xl' />
                    </button>
                </div>

                <div className={` ${isOpen ? "block" : "hidden"} bg-white py-6 px-3`}>
                    <ul className=' text-start flex flex-col justify-between'>

                        <div className={`flex flex-col ${theme} justify-between`}>

                            <Menu>
                                <MenuButton className='text-[#111111] '>
                                    <div className='flex items-center'>
                                        <span className=' text-lg font-semibold'>Course catalog</span> <BsChevronDown className='ml-2 text-lg font-semibold' />
                                    </div>

                                </MenuButton>
                                <MenuList className='text-md text-[#6B7280]'>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>


                            <Menu>
                                <MenuButton className='text-[#111111] '>
                                    <div className='flex items-center'>
                                        <span className=' text-lg font-semibold'>Company</span> <BsChevronDown className='ml-2 text-lg font-semibold' />
                                    </div>

                                </MenuButton>
                                <MenuList className='text-md text-[#6B7280]'>
                                    <MenuItem as='a' href='#'>Link 1</MenuItem>
                                    <MenuItem as='a' href='#'>Link 2</MenuItem>
                                </MenuList>
                            </Menu>

                        </div>

                        <div className='flex flex-col items-center space-x-6 justify-between'>
                            <Link className='text-[#1089FE] text-sm' href='/teach'>
                                Teach on Edukarma
                            </Link>

                            <Link className='bg-[#1089FE] text-white py-3 px-8 rounded-lg text-sm' href='/login'>
                                Take Quiz
                            </Link>
                        </div>


                    </ul>
                </div>


            </nav>
        </div>
        )
}

export default Navbar