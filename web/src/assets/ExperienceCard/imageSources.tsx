import { StaticImageData } from 'next/image'

import skywardLogo from "@/assets/companyLogo/skywardLogo.jpeg"
import l3HarrisLogo from "@/assets/companyLogo/l3HarrisLogo.jpg"
import navSeaLogo from "@/assets/companyLogo/navseaLogo.jpg"
import noaaCrestLogo from "@/assets/companyLogo/noaaCrestLogo.png"

export const tools: { [key: string]: string[] } = {
    "Software Engineer-Skyward Federal": [
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
        "https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-django-512.png",
        "https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
        "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/640/aws-512.png",
        "https://cdn2.iconfinder.com/data/icons/mixd/512/16_kubernetes-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    "Sr. Associate Software Engineer-L3Harris": [
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
        "https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-django-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
        "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png"
    ],
    "Software Engineer Intern-Naval Undersea Warfare Center Keyport Division": [
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/30_Atlassian_logo_logos-512.png",
    ],
    "NOAA Undergraduate Scholar-NOAA-CREST": [
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/285_R_Project_logo-512.png",
    ]

}

export const companyLogo: { [key: string]: StaticImageData[] } = {
    "Software Engineer-Skyward Federal": [skywardLogo],
    "Sr. Associate Software Engineer-L3Harris": [l3HarrisLogo],
    "Software Engineer Intern-Naval Undersea Warfare Center Keyport Division": [navSeaLogo],
    "NOAA Undergraduate Scholar-NOAA-CREST": [noaaCrestLogo]
}
