import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";

export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;
  let name = "TURING GROUP";

  return (
    <div style={{ direction: "rtl", minHeight: "11vh" }}>
      <br-x />
      <Window
        title={name}
        style={{
          minHeight: 200,
          margin: 10,
          width: "calc(100% - 20px)",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/b/b8/Shiraz.jpg)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#030303",
            width: "100%",
            direction: "ltr",
            padding: "0.75rem",
            backdropFilter: "blur(5px)",
            height: "100vh",
            color: "black",
          }}
        >
          <div>
            <div>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "10px",
                  fontFamily: "serif",
                  width: "100%",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1E124A"
                >
                  <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                Weather in <span style={{ color: "#FF1744" }}>Shiraz</span>
              </h2>
              <div>
                <p style={{ textAlign: "center", fontSize: "1rem" }}>
                  {props.weather.weather[0].date as string}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginLeft: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFF55"
                >
                  <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
                </svg>

                <strong style={{ color: "#FAFAFA" }}>
                  {
                    props.weather.current_condition[0].weatherDesc[0]
                      .value as string
                  }
                </strong>
              </p>
            </div>
            <div style={{ marginRight: "9.8rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#314D1C"
                >
                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                </svg>
                Visibility:
                <strong>
                  {props.weather.current_condition[0].visibility as string}
                </strong>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginLeft: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#BD4C31"
                >
                  <path d="M520-520v-80h200v80H520Zm0-160v-80h320v80H520ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z" />
                </svg>
                Temperature:
                <strong>
                  {props.weather.current_condition[0].temp_C as string}°C
                </strong>
              </p>
            </div>
            <div style={{ marginRight: "9.5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#2854C5"
                >
                  <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100ZM240-416h480q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416Z" />
                </svg>
                Humidity:
                <strong>
                  {props.weather.current_condition[0].humidity as string}
                </strong>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginLeft: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#75FB4C"
                >
                  <path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z" />
                </svg>
                Pressure:
                <strong>
                  {props.weather.current_condition[0].pressure as string}
                </strong>
              </p>
            </div>
            <div style={{ marginRight: "10rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-200 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm198 134-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z" />
                </svg>
                UV Index:
                <strong>
                  {props.weather.current_condition[0].uvIndex as string}
                </strong>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginLeft: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#314D1C"
                >
                  <path d="M400-40q0-33 23.5-56.5T480-120v-208q-12-5-22.5-11.5T438-354l-88 56q-14 8-30.5 10.5T286-290l-180-51q-29-8-47.5-32.5T40-429q0-38 26.5-64.5T131-520h301q10-11 22-19t26-13v-137q0-17 6.5-32t18.5-26l137-128q23-22 53.5-25t56.5 13q32 20 41.5 56.5T783-762L624-499q7 12 10.5 26t4.5 29l108 26q16 4 29 14t21 24l91 164q15 27 11 57t-26 52q-27 27-64.5 27T744-107L560-291v171q33 0 56.5 23.5T640-40H400ZM160-760v-80h240v80H160Zm400 71v137q1 0 1.5.5t1.5.5l152-253q2-4 1-8.5t-5-6.5q-3-2-7.5-1t-6.5 3L560-689ZM40-600v-80h200v80H40Zm480 200q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm-211 34 93-56q-1-5-1-9v-9H131q-5 0-8 3t-3 8q0 4 2 7t6 4l181 52Zm419 25-114-26q-2 2-4 5t-4 5l195 194q3 3 8 3t8-3q3-3 3.5-6.5T819-177l-91-164ZM120-120v-80h200v80H120Zm400-320Zm43-111ZM401-440Zm205 83Z" />
                </svg>
                Wind speed:
                <strong>
                  {props.weather.current_condition[0].windspeedKmph as string}
                  km/h
                </strong>
              </p>
            </div>
            <div style={{ marginRight: "6.8rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#173660"
                >
                  <path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z" />
                </svg>
                Avg temp:
                <strong>{props.weather.weather[0].avgtempC as string}°C</strong>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <div style={{ marginLeft: "5rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFF55"
                >
                  <path d="M440-760v-160h80v160h-80Zm266 110-56-56 113-114 56 57-113 113Zm54 210v-80h160v80H760Zm3 299L650-254l56-56 114 112-57 57ZM254-650 141-763l57-57 112 114-56 56Zm-14 450h180q25 0 42.5-17.5T480-260q0-25-17-42.5T421-320h-51l-20-48q-14-33-44-52.5T240-440q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q60 0 109.5 32.5T423-400q58 0 97.5 43T560-254q-2 57-42.5 95.5T420-120H240Zm320-134q-5-20-10-39t-10-39q45-19 72.5-59t27.5-89q0-66-47-113t-113-47q-60 0-105 39t-53 99q-20-5-41-9t-41-9q14-88 82.5-144T480-720q100 0 170 70t70 170q0 77-44 138.5T560-254Zm-79-226Z" />
                </svg>
                Sunrise:
                <strong>
                  {props.weather.weather[0].astronomy[0].sunrise as string}
                </strong>
              </p>
            </div>
            <div style={{ marginRight: "4.6rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  color: "#FAFAFA",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#EA3323"
                >
                  <path d="M40-410v-80h160v80H40Zm214-210L140-733l57-56 113 113-56 56Zm-14 420q-21 0-35.5-14.5T190-250q0-21 14.5-35.5T240-300q21 0 35.5 14.5T290-250q0 21-14.5 35.5T240-200Zm40-210v-40q0-83 58.5-141.5T480-650q83 0 141.5 58.5T680-450v40h-80v-40q0-50-35-85t-85-35q-50 0-85 35t-35 85v40h-80Zm80 370q-21 0-35.5-14.5T310-90q0-21 14.5-35.5T360-140q21 0 35.5 14.5T410-90q0 21-14.5 35.5T360-40Zm120-160q-21 0-35.5-14.5T430-250q0-21 14.5-35.5T480-300q21 0 35.5 14.5T530-250q0 21-14.5 35.5T480-200Zm-40-530v-160h80v160h-80ZM600-40q-21 0-35.5-14.5T550-90q0-21 14.5-35.5T600-140q21 0 35.5 14.5T650-90q0 21-14.5 35.5T600-40Zm106-580-57-56 114-113 56 56-113 113Zm14 420q-21 0-35.5-14.5T670-250q0-21 14.5-35.5T720-300q21 0 35.5 14.5T770-250q0 21-14.5 35.5T720-200Zm40-210v-80h160v80H760Zm-280 0Z" />
                </svg>
                Sunset:
                <strong>
                  {props.weather.weather[0].astronomy[0].sunset as string}
                </strong>
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://iili.io/daBmKmJ.png"
              alt="bugology"
              style={{
                width: "15rem",
                marginTop: "5rem",
              }}
            />
          </div>
        </div>
      </Window>
    </div>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://cdn.ituring.ir/research/api/weather/");
  let data = await res.json();
  let weather = data;

  console.log("weatheeeeeeeeeeeeeeeeeeeeeeeeeeer:", weather);

  return {
    props: {
      data: global.QSON.stringify({
        weather,
        session,
        // nlangs,
      }),
    },
  };
}
