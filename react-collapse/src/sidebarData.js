import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const sidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Products',
        path: '/overview',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />
    },
    {
        title: 'Team',
        path: '/overview',
        icon: <IoIcons.IoMdPeople />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Support',
        path: '/overview',
        icon: <IoIcons.IoMdHelpCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        openIcon: <RiIcons.RiArrowUpSFill />
    }
]