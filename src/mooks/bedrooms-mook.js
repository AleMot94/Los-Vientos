import sonqoyBanio from "../assets/Bedrooms/banio-sonqoy.jpg";
import sonqoyBanio1 from "../assets/Bedrooms/banio1-sonqoy.jpg";
import sonqoyCamas from "../assets/Bedrooms/camas-sonqoy.jpg";
import sonqoyEntrada from "../assets/Bedrooms/entrada-sonqoy.jpg";
import sonqoyPortada from "../assets/Bedrooms/portada-sonqoy.jpg";

import elFuegoBanio from "../assets/Bedrooms/banio-el-fuego.jpg";
import elFuegoBanio1 from "../assets/Bedrooms/banio1-el-fuego.jpg";
import elFuegoCamas from "../assets/Bedrooms/camas-el-fuego.jpg";
import elFuegoEntrada from "../assets/Bedrooms/entrada-el-fuego.jpg";
import elFuegoPortada from "../assets/Bedrooms/portada-el-fuego.jpg";

import losBuhosBanio from "../assets/Bedrooms/banio-los-buhos.jpg";
import losBuhosCamas1 from "../assets/Bedrooms/camas1-los-buhos.jpg";
import losBuhosCamas from "../assets/Bedrooms/camas-los-buhos.jpg";
import losBuhosEntrada from "../assets/Bedrooms/entrada-los-buhos.jpg";
import losBuhosPortada from "../assets/Bedrooms/portada-los-buhos.jpg";

import elAmanecerBanio from "../assets/Bedrooms/banio-el-amanecer.jpg";
import elAmanecerCamas1 from "../assets/Bedrooms/camas1-el-amanecer.jpg";
import elAmanecerCamas from "../assets/Bedrooms/camas-el-amanecer.jpg";
import elAmanecerEntrada from "../assets/Bedrooms/entrada-el-amanecer.jpg";
import elAmanecerPortada from "../assets/Bedrooms/portada-el-amanecer.jpg";

import losTerosBanio from "../assets/Bedrooms/banio-los-teros.jpg";
import losTerosBanio1 from "../assets/Bedrooms/banio1-los-teros.jpg";
import losTerosCamas from "../assets/Bedrooms/camas-los-teros.jpg";
import losTerosCamas1 from "../assets/Bedrooms/camas1-los-teros.jpg";
import losTerosPortada from "../assets/Bedrooms/portada-los-teros.jpg";

import elAtardecerBanio from "../assets/Bedrooms/banio-el-atardecer.jpg";
import elAtardecerCamas1 from "../assets/Bedrooms/camas1-el-atardecer.jpg";
import elAtardecerCamas from "../assets/Bedrooms/camas-el-atardecer.jpg";
import elAtardecerEntrada from "../assets/Bedrooms/entrada-el-atardecer.jpg";
import elAtardecerPortada from "../assets/Bedrooms/portada-el-atardecer.jpg";

import huayraHuasiBanio from "../assets/Bedrooms/banio-huayra-huasi.jpg";
import huayraHuasiCamas1 from "../assets/Bedrooms/camas1-huayra-huasi.jpg";
import huayraHuasiCamas from "../assets/Bedrooms/camas-huayra-huasi.jpg";
import huayraHuasiPasillo from "../assets/Bedrooms/pasillo-huayra-huasi.jpg";
import huayraHuasiPortada from "../assets/Bedrooms/portada-huayra-huasi.jpg";

export const bedrooms = [
  {
    id: 1,
    imgs: [
      { id: 1, img: sonqoyPortada, name: "portada habitacion" },
      { id: 2, img: sonqoyBanio, name: "baño habitacion" },
      { id: 3, img: sonqoyBanio1, name: "baño habitacion" },
      { id: 4, img: sonqoyCamas, name: "camas habitacion" },
      { id: 5, img: sonqoyEntrada, name: "entrada habitacion" },
    ],
    name: "Sonqoy",
    description: "Habitación doble matrimonial",
  },
  {
    id: 2,
    imgs: [
      { id: 1, img: elFuegoPortada, name: "portada habitacion" },
      { id: 2, img: elFuegoBanio, name: "baño habitacion" },
      { id: 3, img: elFuegoBanio1, name: "baño habitacion" },
      { id: 4, img: elFuegoCamas, name: "camas habitacion" },
      { id: 5, img: elFuegoEntrada, name: "entrada habitacion" },
    ],
    name: "El Fuego",
    description: "Habitación doble con camas individuales",
  },
  {
    id: 3,
    imgs: [
      { id: 1, img: losBuhosPortada, name: "portada habitacion" },
      { id: 2, img: losBuhosBanio, name: "baño habitacion" },
      { id: 3, img: losBuhosCamas1, name: "camas habitacion" },
      { id: 4, img: losBuhosCamas, name: "camas habitacion" },
      { id: 5, img: losBuhosEntrada, name: "entrada habitacion" },
    ],
    name: "Los Buhos",
    description: "Habitación triple, cama individual y matrimonial",
  },
  {
    id: 4,
    imgs: [
      { id: 1, img: elAmanecerPortada, name: "portada habitacion" },
      { id: 2, img: elAmanecerBanio, name: "baño habitacion" },
      { id: 3, img: elAmanecerCamas1, name: "camas habitacion" },
      { id: 4, img: elAmanecerCamas, name: "camas habitacion" },
      { id: 5, img: elAmanecerEntrada, name: "entrada habitacion" },
    ],
    name: "El Amanecer",
    description:
      "Habitación cuadruple, doble matrimonial y dos camas individuales",
  },
  {
    id: 5,
    imgs: [
      { id: 1, img: losTerosPortada, name: "portada habitacion" },
      { id: 2, img: losTerosBanio, name: "baño habitacion" },
      { id: 3, img: losTerosCamas1, name: "camas habitacion" },
      { id: 4, img: losTerosCamas, name: "camas habitacion" },
      { id: 5, img: losTerosBanio1, name: "baño habitacion" },
    ],
    name: "Los Teros",
    description:
      "Habitación cuadruple, doble matrimonial y dos camas individuales",
  },
  {
    id: 6,
    imgs: [
      { id: 1, img: elAtardecerPortada, name: "portada habitacion" },
      { id: 2, img: elAtardecerBanio, name: "baño habitacion" },
      { id: 3, img: elAtardecerCamas1, name: "camas habitacion" },
      { id: 4, img: elAtardecerCamas, name: "camas habitacion" },
      { id: 5, img: elAtardecerEntrada, name: "entrada habitacion" },
    ],
    name: "El Atardecer",
    description:
      "Habitación cuadruple, doble matrimonial y dos camas individuales",
  },
  {
    id: 7,
    imgs: [
      { id: 1, img: huayraHuasiPortada, name: "portada habitacion" },
      { id: 2, img: huayraHuasiBanio, name: "baño habitacion" },
      { id: 3, img: huayraHuasiCamas1, name: "camas habitacion" },
      { id: 4, img: huayraHuasiCamas, name: "camas habitacion" },
      { id: 5, img: huayraHuasiPasillo, name: "pasillo habitacion" },
    ],
    name: "Huayra Huasi",
    description:
      "Habitación quintuple, doble matrimonial y tres camas individuales",
  },
];
