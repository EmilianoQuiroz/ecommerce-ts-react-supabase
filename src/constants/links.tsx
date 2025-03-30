import { BiWorld } from "react-icons/bi";
import { FaFacebookF, FaHammer, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";

// Desc: Links for the navbar
export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/'
    },
    {
        id: 2,
        title: 'Celulares',
        href: '/celulares'
    },
    {
        id: 3,
        title: 'Sobre Nosotros',
        href: '/nosotros'
    }
];

// Desc: Links for the footer
export const socialLinks = [
	{
		id: 1,
		title: 'Facebook',
		href: 'https://www.facebook.com',
		icon: <FaFacebookF />,
	},
	{
		id: 2,
		title: 'Twitter',
		href: 'https://www.twitter.com',
		icon: <FaXTwitter />,
	},
	{
		id: 3,
		title: 'Instagram',
		href: 'https://www.instagram.com',
		icon: <FaInstagram />,
	},
	{
		id: 4,
		title: 'Tiktok',
		href: 'https://www.tiktok.com',
		icon: <FaTiktok />,
	},
];

// Desc: Links for Feature Grid
export const featureGridLinks = [
	{
		id: 1,
		title: 'Envios gratis',
		description: 'En todos nuestros productos',
		icon: <MdLocalShipping size={40} className="text-slate-600" />,
	},
	{
		id: 2,
		title: 'Garantia de 1 año',
		description: 'En todos nuestros productos',
		icon: <BiWorld size={40} className="text-slate-600" />,
	},
	{
		id: 3,
		title: 'Soporte 24/7',
		description: 'En todos nuestros productos',
		icon: <FaHammer size={40} className="text-slate-600" />,
	},
	{
		id: 4,
		title: 'Devoluciones gratis',
		description: 'En todos nuestros productos',
		icon: <HiMiniReceiptRefund size={40} className="text-slate-600" />,
	},
];

// Desc: Links for Brands
export const brandsLinks = [
	{
		id: 1,
		image: '/img/brands/Apple-Logo.webp',
		alt: 'apple',
	},
	{
		id: 2,
		image: '/img/brands/honor-logo.png',
		alt: 'honor',
	},
	{
		id: 3,
		image: '/img/brands/huawei-logo.png',
		alt: 'huawei',
	},
	{
		id: 4,
		image: '/img/brands/realme-logo.webp',
		alt: 'realme',
	},
	{
		id: 5,
		image: '/img/brands/Samsung_Logo.webp',
		alt: 'samsung',
	},
	{
		id: 6,
		image: '/img/brands/xiaomi-logo.webp',
		alt: 'xiaomi',
	},
];