import { useState } from "react";
import escudoClub from "./assets/escudo-club.jpg";
import logoBig from "./assets/logo-big.png";
import star2 from "./assets/star2.png";
import "./index.css";
import fedeLovalvo from "./assets/1ra/fede.jpg";
import naza from "./assets/1ra/naza.jpg";
import nioco from "./assets/1ra/nioco.jpg";
import tomy from "./assets/1ra/tomy.jpg";
import niklas from "./assets/1ra/niklas.jpg";
import facu from "./assets/1ra/facu.jpg";
import alejo from "./assets/1ra/alejo.jpg";
import franco from "./assets/1ra/franco.jpg";
import tito from "./assets/1ra/tito.jpg";
import nicolas from "./assets/1ra/nicolas.jpg";
import cano from "./assets/1ra/cano.jpg";
import tato from "./assets/1ra/tato.jpg";
import liam from "./assets/1ra/liam.jpg";
import lauti from "./assets/1ra/lauti.jpg";
import coria from "./assets/1ra/coria.jpg";
import chucky from "./assets/1ra/chucky.jpg";
import camean from "./assets/1ra/camean.jpg";
import caba from "./assets/1ra/caba.jpg";
import juani from "./assets/1ra/juani.jpg";
import pelusa from "./assets/1ra/pelusa.jpg";
import gabriel from "./assets/5ta/gabriel.jpg";
import dante from "./assets/5ta/dante.jpg";
import thiago from "./assets/5ta/thiago.jpg";
import noa from "./assets/5ta/noa.jpg";
import bauti from "./assets/5ta/bautista.jpg";
import daniel from "./assets/5ta/dante2.jpg";
import oziel from "./assets/5ta/oziel.jpg";
import benja from "./assets/5ta/benja.jpg";
import ian from "./assets/5ta/ian.jpg";
import rami from "./assets/5ta/ramiro.jpg";
import fran from "./assets/5ta/francisco.jpg";
import juan from "./assets/5ta/juan.jpg";
import gonza from "./assets/5ta/gonza.jpg";
import aaron from "./assets/5ta/aaron.jpg";

import alejo1 from "./assets/autoridades/alejo.jpg";
import balti from "./assets/autoridades/balti.jpg";
import chodry from "./assets/autoridades/chodry.jpg";
import kusko from "./assets/autoridades/nico.jpg";
import camean2 from "./assets/autoridades/camean.jpg";
import stella from "./assets/autoridades/stella.jpg";
import alejo2 from "./assets/autoridades/alejo3.jpg";
import neno from "./assets/autoridades/neno.jpg";

type Division = "1RA" | "5TA";

type Jugador = {
  id: number;
  nombre: string;
  dni: string;
  club: string;
  disciplina: string;
  zona: string;
  division: Division;
  estado: string;
  foto: string;
};

type Autoridad = {
  id: number;
  nombre: string;
  dni: string;
  club: string;
  fechaFichaje: string;
  estado: string;
  foto?: string;
};

const jugadoresIniciales: Jugador[] = [
  {
    id: 1,
    nombre: "FEDERICO YOEL LOVALVO",
    dni: "41.758.843",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: fedeLovalvo,
  },
  {
    id: 2,
    nombre: "NAZARENO DEL BUONO",
    dni: "46.910.257",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: naza,
  },
  {
    id: 3,
    nombre: "FEDERICO TOMAS GONZALEZ",
    dni: "42.644.571",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: nioco,
  },
  {
    id: 4,
    nombre: "TOMAS VALATKIEWICZ",
    dni: "46.025.894",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: tomy,
  },
  {
    id: 5,
    nombre: "NICOLA VALENTIN QUIROGA GARRETANO",
    dni: "43.244.530",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: niklas,
  },
  {
    id: 6,
    nombre: "FACUNDO YAIR LOVALVO",
    dni: "42.495.180",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: facu,
  },
  {
    id: 7,
    nombre: "ALEJO ARIEL TEMPONE",
    dni: "41.777.069",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: alejo,
  },
  {
    id: 8,
    nombre: "FRANCO TOMAS FERREYRA",
    dni: "43.244.182",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: franco,
  },
  {
    id: 9,
    nombre: "FRANCO AGUSTIN CUERVO",
    dni: "44.261.445",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: tito,
  },
  {
    id: 10,
    nombre: "NICOLAS DAVID CUERVO",
    dni: "42.659.881",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: nicolas,
  },
  {
    id: 11,
    nombre: "DEMIAN ULISES CANO VILAS BOAS",
    dni: "44.895.999",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: pelusa,
  },
  {
    id: 12,
    nombre: "IGNACIO ESTEBAN FERREYRA",
    dni: "46.737.311",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: tato,
  },
  {
    id: 13,
    nombre: "LIAM DE LOS RIOS",
    dni: "44.354.496",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: liam,
  },
  {
    id: 14,
    nombre: "LAUTARO NAHUEL BENITEZ",
    dni: "41.151.926",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: lauti,
  },
  {
    id: 15,
    nombre: "LAUTARO MATEO CORIA",
    dni: "46.291.998",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: coria,
  },
  {
    id: 16,
    nombre: "AGUSTIN LUCAS",
    dni: "42.996.879",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "INHABILITADO",
    foto: chucky,
  },
  {
    id: 17,
    nombre: "FRANCO CAMEAN",
    dni: "46.878.191",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: camean,
  },
  {
    id: 18,
    nombre: "SANTIAGO EZEQUIEL CABANAS",
    dni: "43.170.097",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: caba,
  },
  {
    id: 19,
    nombre: "JUAN IGNACIO FONTAN",
    dni: "46.501.213",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "VALIDADO",
    foto: juani,
  },
  {
    id: 20,
    nombre: "THIAGO RAMIRO BUCCHERI",
    dni: "46.359.681",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "1RA",
    estado: "RECHAZADO",
    foto: cano,
  },
  {
    id: 21,
    nombre: "GABRIEL JORGE VOLPATO SANTA CRUZ",
    dni: "51.137.827",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: gabriel,
  },
  {
    id: 22,
    nombre: "DANTE OTERO",
    dni: "51.358.594",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: dante,
  },
  {
    id: 23,
    nombre: "THIAGO AGUSTIN HERRRERA",
    dni: "52.044.507",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: thiago,
  },
  {
    id: 24,
    nombre: "NOA LEANDRO TRULLENQUE",
    dni: "52.137.801",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: noa,
  },
  {
    id: 25,
    nombre: "BAUTISTA GONZALEZ",
    dni: "50.903.371",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: bauti,
  },
  {
    id: 26,
    nombre: "DANIEL DIEGO FERNANDO CHOROLQUE",
    dni: "51.040.952",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: daniel,
  },
  {
    id: 27,
    nombre: "OZIEL ISMAEL BRIONES CUELLO",
    dni: "51.156.753",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: oziel,
  },
  {
    id: 28,
    nombre: "BENJAMIN LA CARIA",
    dni: "50.987.103",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: benja,
  },
  {
    id: 29,
    nombre: "IAN MARTINEZ",
    dni: "52.438.339",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: ian,
  },
  {
    id: 30,
    nombre: "RAMIRO LO BRUNO",
    dni: "51.216.753",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: rami,
  },
  {
    id: 31,
    nombre: "FRANCISCO MARTIN BOTTO",
    dni: "51.249.002",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: fran,
  },
  {
    id: 32,
    nombre: "JUAN MANUEL ARDOLINO",
    dni: "51.397.490",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: juan,
  },
  {
    id: 33,
    nombre: "GONZALO TABOADA ",
    dni: "51.071.925",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: gonza,
  },
  {
    id: 34,
    nombre: "AARON YAHIR RIVERO",
    dni: "52.161.147",
    club: "Asociacion Juventud",
    disciplina: "MASCULINO",
    zona: "M - ELITE II",
    division: "5TA",
    estado: "VALIDADO",
    foto: aaron,
  },
];

const autoridadesIniciales: Autoridad[] = [
  {
    id: 101,
    nombre: "ALEJO ARIEL TEMPONE",
    dni: "41.777.069",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "PENDIENTE",
    foto: alejo1,
  },
  {
    id: 102,
    nombre: "BALTASAR ELIAN NISCA",
    dni: "46.123.561",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: balti,
  },
  {
    id: 103,
    nombre: "FRANCO TOMAS FERREYRA",
    dni: "43.244.182",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: franco,
  },
  {
    id: 104,
    nombre: "RODRIGO EZEQUIEL SAN JUAN",
    dni: "40.536.354",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: chodry,
  },
  {
    id: 105,
    nombre: "NICOLAS DAVID CUERVO",
    dni: "42.659.881",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: kusko,
  },
  {
    id: 106,
    nombre: "FRANCO CAMEAN",
    dni: "46.878.191",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: camean2,
  },
  {
    id: 107,
    nombre: "STELLA MARIS SUAREZ",
    dni: "17.332.240",
    club: "Asociacion Juventud",
    fechaFichaje: "25/03/2026",
    estado: "VALIDADO",
    foto: stella,
  },
  {
    id: 108,
    nombre: "ALEJO ARIEL TEMPONE",
    dni: "41.777.069",
    club: "Asociacion Juventud",
    fechaFichaje: "23/07/2026",
    estado: "VALIDADO",
    foto: alejo2,
  },
  {
    id: 109,
    nombre: "NAZARENO TOMAS NICOLOSI",
    dni: "43.571.710",
    club: "Asociacion Juventud",
    fechaFichaje: "23/07/2026",
    estado: "VALIDADO",
    foto: neno,
  },
];

export default function App() {
  const [division, setDivision] = useState<Division>("1RA");
  const [jugadores] = useState<Jugador[]>(jugadoresIniciales);
  const [autoridades] = useState<Autoridad[]>(autoridadesIniciales);

  const visibles = jugadores.filter((jugador) => jugador.division === division);

  const getBadgeClass = (estado: string) => {
    if (estado === "VALIDADO") return "bg-label-success";
    if (estado === "PENDIENTE") return "bg-label-warning";
    return "bg-label-danger";
  };

  // Función para retornar la clase CSS correspondiente según el estado
  const getCardModifierClass = (estado: string) => {
    if (estado === "PENDIENTE") return "card-pendiente";
    if (estado === "INHABILITADO" || estado === "RECHAZADO") return "card-inhabilitado";
    return ""; // Por defecto toma el gradiente normal de card-credencial-bg
  };

  return (
    <div className="layout-mobile-wrapper">
      {/* Header Superior Original */}
      <header className="navbar-original">
        <button className="btn-menu-hamburger" type="button" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#697a8d" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="navbar-right">
          <button className="btn-logout" type="button" aria-label="Salir">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#697a8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
          
          <div className="club-avatar-status">
            <img src={escudoClub} alt="Escudo Club" className="club-img" />
            <span className="online-dot"></span>
          </div>
        </div>
      </header>

      <main className="content-container">
        {/* Card Filtros */}
        <div className="card-box-original" style={{ marginTop: 40 }}>
          <h4 className="card-title">Carnet Digital</h4>

          <div className="form-floating-custom">
            <label>Seleccionar Disciplina</label>
            <div className="select-container">
              <select defaultValue="MASCULINO">
                <option value="MASCULINO">MASCULINO</option>
              </select>
              <span className="btn-x">×</span>
              <span className="select-arrow">▼</span>
            </div>
          </div>

          <div className="form-floating-custom">
            <label>Seleccionar Zona</label>
            <div className="select-container">
              <select defaultValue="M - ELITE II">
                <option value="M - ELITE II">M - ELITE II</option>
              </select>
              <span className="btn-x">×</span>
              <span className="select-arrow">▼</span>
            </div>
          </div>

          <div className="form-floating-custom">
            <label>Seleccionar División</label>
            <div className="select-container">
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value as Division)}
              >
                <option value="1RA">1RA</option>
                <option value="5TA">5TA</option>
              </select>
              <span className="btn-x">×</span>
              <span className="select-arrow">▼</span>
            </div>
          </div>

          <button className="btn-cargar-jugadores">Cargar Jugadores</button>
        </div>

        {/* Card Fichajes (Jugadores) */}
        <div className="card-box-original">
          <div className="fichajes-pill">Fichajes</div>

          {visibles.map((jugador) => (
            <div className="col-12 col-md-6 noPaddingMobile" key={jugador.id}>
              <div className={`card noPaddingMobile card-credencial-bg ${getCardModifierClass(jugador.estado)}`}>
                <div className="container container-credencial-inner">
                  {/* Marca de agua Liga */}
                  <img src={logoBig} alt="logo liga" className="img-fluid logo-big-watermark" />

                  {/* Foto de Perfil Izquierda */}
                  <div className="box-foto-bg">
                    {jugador.foto ? (
                      <img src={jugador.foto} alt="Avatar" className="imgCarnet" />
                    ) : (
                      <div className="imgCarnet photo-placeholder-original">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#697a8d" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Sin foto</span>
                      </div>
                    )}
                  </div>

                  {/* Sombreado Azul Oscuro y Datos */}
                  <div className="box-datos-bg">
                    <div className="datos-content">
                      <h5>{jugador.nombre}</h5>
                      <p><strong>DNI:</strong> {jugador.dni}</p>
                      <p><strong>Club:</strong> {jugador.club}</p>
                      <p><strong>Disciplina:</strong> {jugador.disciplina}</p>
                      <p><strong>Zona:</strong> {jugador.zona}</p>
                      <p><strong>División:</strong> {jugador.division}</p>
                      <p className="estado-p">
                        <strong>Estado:</strong>{" "}
                        <span className={`badge ${getBadgeClass(jugador.estado)}`}>{jugador.estado}</span>
                      </p>
                    </div>

                    <img src={star2} alt="star liga" className="img-fluid star-watermark" />
                  </div>

                  {/* Redes */}
                  <p className="redesCarnet"><strong>@laamba.ok / @laamba.camp</strong></p>

                  {/* Escudo Club Abajo a la Derecha */}
                  <img src={escudoClub} alt="logo Club" className="logo-club-bottom" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Card Autoridades */}
        <div className="card-box-original">
          <div className="fichajes-pill">Autoridades</div>

          {autoridades.map((aut) => (
            <div className="col-12 col-md-6 noPaddingMobile" key={aut.id}>
              <div className={`card noPaddingMobile card-credencial-bg ${getCardModifierClass(aut.estado)}`}>
                <div className="container container-credencial-inner">
                  {/* Marca de agua Liga */}
                  <img src={logoBig} alt="logo liga" className="img-fluid logo-big-watermark" />

                  {/* Foto de Perfil Izquierda */}
                  <div className="box-foto-bg">
                    {aut.foto ? (
                      <img src={aut.foto} alt="Avatar" className="imgCarnet" />
                    ) : (
                      <div className="imgCarnet photo-placeholder-original">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#697a8d" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Sin foto</span>
                      </div>
                    )}
                  </div>

                  {/* Sombreado Azul Oscuro y Datos de Autoridad */}
                  <div className="box-datos-bg">
                    <div className="datos-content">
                      <h5>{aut.nombre}</h5>
                      <p><strong>DNI:</strong> {aut.dni}</p>
                      <p><strong>Club:</strong> {aut.club}</p>
                      <p><strong>Fecha de Fichaje:</strong> {aut.fechaFichaje}</p>
                      <p className="estado-p">
                        <strong>Estado:</strong>{" "}
                        <span className={`badge ${getBadgeClass(aut.estado)}`}>{aut.estado}</span>
                      </p>
                    </div>

                    <img src={star2} alt="star liga" className="img-fluid star-watermark" />
                  </div>

                  {/* Redes */}
                  <p className="redesCarnet"><strong>@laamba.ok / @laamba.camp</strong></p>

                  {/* Escudo Club Abajo a la Derecha */}
                  <img src={escudoClub} alt="logo Club" className="logo-club-bottom" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}