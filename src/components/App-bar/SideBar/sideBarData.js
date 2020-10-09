import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const sideBareData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
    },
    {
        title: "Blog",
        path: "/blog",
        icon: <IoIcons.IoIosPaper/>,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <IoIcons.IoIosPaper/>,
    },
];

export const otherlinks = [
    {
        title: "Protein",
        products: [
            {
                path: "/",
                name: "Shakes & Powders"
            },
            {
                path: "/",
                name: "Snacks"
            },
        ]
    },
    {
        title: "WEIGHT MANAGEMENT",
        products: [
            {
                path: "/",
                name: "Weight Gainers"
            }
        ]
    },
    {
        title: " ADVANCED FITNESS",
        products: [
            {
                path: "/",
                name: "Muscle Building"
            },
            {
                path: "/",
                name: "Endurance Support"
            },
        ]
    }
];