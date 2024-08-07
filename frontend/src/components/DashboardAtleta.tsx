import React from "react";
import "../styles/DashboardAtleta.css";
import SparkLogo from "../assets/logo-spark.png";
import UsdcLogo from "../assets/usdc-logo.png";
import NavBar from "./NavBar";

const DashboardAtleta: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="backDashboardAtleta">
        <div className="cardDashboardAtleta">
          <div className="titleDash">
            <h1>Olá Atleta</h1>
            <p>Seja bem-vindo(a) a sua Dashboard!</p>
          </div>

          <div className="dadosAtleta">
            <div className="saldoAtleta">
              <h1>Seu Saldo</h1>
              <div className="saldoAtletaSpark">
                <img src={SparkLogo} alt="Spark Logo" />
                <p>19.200,30</p>
              </div>
            </div>
            <div className="conversao">
              <h1>Faça aqui sua Conversão</h1>
              <div className="conversaoInput">
                <div className="conversaoUsdc">
                  <label>
                    <img src={UsdcLogo} alt="USDC Logo" />
                  </label>
                  <input type="number" placeholder="Insira a quantidade" />
                </div>
                <div className="conversaoSpark">
                  <label>
                    <img src={SparkLogo} alt="Spark Logo" />
                  </label>
                  <input type="number" placeholder="Insira a quantidade" />
                </div>
              </div>
              <button>Converter</button>
            </div>

            <div className="criarCampanha">
              <h1>Crie uma Campanha</h1>
              <input type="text" placeholder="Nome da Campanha" />
              <input type="number" placeholder="Meta de Arrecadação" />
              <label>Duração da Campanha</label>
              <input type="date" placeholder="Duração da campanha" />
              <button>Criar Campanha</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>ID da Campanha</th>
                  <th>Nome da Campanha</th>
                  <th>Data de Início</th>
                  <th>Data de Término</th>
                  <th>Meta de Arrecadação</th>
                  <th>Valor Arrecadado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Olímpiadas Paris</td>
                  <td>20/06/2024</td>
                  <td>26/07/2024</td>
                  <td>150.000,00</td>
                  <td>47.500,00</td>
                </tr>
                <tr>
                  <td>2025</td>
                  <td>Triatlo Florianópolis</td>
                  <td>25/02/2024</td>
                  <td>30/02/2024</td>
                  <td>20.000,00</td>
                  <td>2.300,00</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Maratona São Silvestre</td>
                  <td>01/12/2024</td>
                  <td>15/12/2024</td>
                  <td>15.000,00</td>
                  <td>14.900,00</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Veneza Run</td>
                  <td>01/01/2025</td>
                  <td>10/01/2025</td>
                  <td>40.000,00</td>
                  <td>22.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAtleta;
