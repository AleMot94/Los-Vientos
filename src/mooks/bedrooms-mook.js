import sonqoyBanio from "../assets/Bedrooms/1-Sonqoy/banio-sonqoy.jpg";
import sonqoyBanio1 from "../assets/Bedrooms/1-Sonqoy/banio1-sonqoy.jpg";
import sonqoyCamas from "../assets/Bedrooms/1-Sonqoy/camas-sonqoy.jpg";
import sonqoyEntrada from "../assets/Bedrooms/1-Sonqoy/entrada-sonqoy.jpg";
import sonqoyPortada from "../assets/Bedrooms/1-Sonqoy/portada-sonqoy.jpg";

import elFuegoBanio from "../assets/Bedrooms/2-El-Fuego/banio-el-fuego.jpg";
import elFuegoBanio1 from "../assets/Bedrooms/2-El-Fuego/banio1-el-fuego.jpg";
import elFuegoCamas from "../assets/Bedrooms/2-El-Fuego/camas-el-fuego.jpg";
import elFuegoEntrada from "../assets/Bedrooms/2-El-Fuego/entrada-el-fuego.jpg";
import elFuegoPortada from "../assets/Bedrooms/2-El-Fuego/portada-el-fuego.jpg";

import losBuhosBanio from "../assets/Bedrooms/3-Los-Buhos/banio-los-buhos.jpg";
import losBuhosCamas1 from "../assets/Bedrooms/3-Los-Buhos/camas1-los-buhos.jpg";
import losBuhosCamas from "../assets/Bedrooms/3-Los-Buhos/camas-los-buhos.jpg";
import losBuhosEntrada from "../assets/Bedrooms/3-Los-Buhos/entrada-los-buhos.jpg";
import losBuhosPortada from "../assets/Bedrooms/3-Los-Buhos/portada-los-buhos.jpg";

import elAmanecerBanio from "../assets/Bedrooms/4-El-Amanecer/banio-el-amanecer.jpg";
import elAmanecerCamas1 from "../assets/Bedrooms/4-El-Amanecer/camas1-el-amanecer.jpg";
import elAmanecerCamas from "../assets/Bedrooms/4-El-Amanecer/camas-el-amanecer.jpg";
import elAmanecerEntrada from "../assets/Bedrooms/4-El-Amanecer/entrada-el-amanecer.jpg";
import elAmanecerPortada from "../assets/Bedrooms/4-El-Amanecer/portada-el-amanecer.jpg";

import losTerosBanio from "../assets/Bedrooms/5-Los-Teros/banio-los-teros.jpg";
import losTerosBanio1 from "../assets/Bedrooms/5-Los-Teros/banio1-los-teros.jpg";
import losTerosCamas from "../assets/Bedrooms/5-Los-Teros/camas-los-teros.jpg";
import losTerosCamas1 from "../assets/Bedrooms/5-Los-Teros/camas1-los-teros.jpg";
import losTerosPortada from "../assets/Bedrooms/5-Los-Teros/portada-los-teros.jpg";

import elAtardecerBanio from "../assets/Bedrooms/6-El-Atardecer/banio-el-atardecer.jpg";
import elAtardecerCamas1 from "../assets/Bedrooms/6-El-Atardecer/camas1-el-atardecer.jpg";
import elAtardecerCamas from "../assets/Bedrooms/6-El-Atardecer/camas-el-atardecer.jpg";
import elAtardecerEntrada from "../assets/Bedrooms/6-El-Atardecer/entrada-el-atardecer.jpg";
import elAtardecerPortada from "../assets/Bedrooms/6-El-Atardecer/portada-el-atardecer.jpg";

import huayraHuasiBanio from "../assets/Bedrooms/7-Huayra-Huasi/banio-huayra-huasi.jpg";
import huayraHuasiCamas1 from "../assets/Bedrooms/7-Huayra-Huasi/camas1-huayra-huasi.jpg";
import huayraHuasiCamas from "../assets/Bedrooms/7-Huayra-Huasi/camas-huayra-huasi.jpg";
import huayraHuasiPasillo from "../assets/Bedrooms/7-Huayra-Huasi/pasillo-huayra-huasi.jpg";
import huayraHuasiPortada from "../assets/Bedrooms/7-Huayra-Huasi/portada-huayra-huasi.jpg";

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
