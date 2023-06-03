import { Link } from "react-router-dom";
import { Amplify } from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours";

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function LGACentre() {
  return (
    <div
      style={{
        backgroundColor: colors.box,
        marginTop: 20,
        width: "50%",
        justifyItems: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ color: colors.txt }}>
        <h style={{ fontSize: 30 }}>LGA Centroids</h>
      </div>
      <div
        style={{ flexDirection: "row", display: 'flex', color: colors.txt_2 }}>
        <div style={{ justifyContent: "flex-start", display: 'flex'}}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>LATITUDE: Latitude of mesh block centre </li>
            <li>LONGITUDE: Longitude of mesh block centre</li>
            <li>LGA_CODE20: Code of the LGA</li>
            <li>LGA_NAME20: Name of the LGA</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>STE_NAME21: Name of a state or province</li>
            <li>STE_CODE21: Code or identifier for a state or province</li>
            <li>AREASQKM21: Area measurement in square kilometers</li>
          </ul>
        </div>
      </div>
      <div>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA4_centres.txt?AWSAccessKeyId=ASIAYCCKBJRXR4ZIN5GI&Expires=1685716115&Signature=XjzsuhJl4QhQnPBslik7rTqAb3c%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIAr%2BO9hYVw9jzw%2FJKj%2BT6hmVtHEShOInaggmqKY1bmTAiASfELEwPSWj1G8pXPeXuAC3hmt%2FcnjKDrBXlPS6OuzairrBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMopcmfF3VZgtYyRY2Kr8E2Rp6sRITnb8kWGMRa%2BJPkYQzXGJjIcENkRFmNv2U15tHrw02rrcz6HB8ZF%2Fq44GnxSMKdRaiDFny2zntF6lZpEz62ALuetXd4AJZqnh9%2B04O5WskJ%2Fy4S6WYhqXWfd4Bt0avXJ%2Bw5jrCwbhROqgJTOQQkhBQ1aWUjql02TuIxJSJ2WBob4%2BztX9kyxxl4piQqzkWAR%2BHxdvu5orUSChuSu7p4RyYTc2Ph2VIXBsjxgLF9tkv%2FSZJiQx4G3aqazg6WJypZXKSr8udhuICjsDT5gyWw%2B3hd2kkC7IMpPnITmFUo92KaX4F8KyYJztc5L8rKfoI6NbmKYvrMkRBTnM1QCuhXavg0Ffbeq%2BmRti%2FYZoXUYAR%2BEjvn5TAqxv%2FkthdeTp1heoo2QOJhwbOO%2F5fLNUmsZ3sPwN9jGzBKTiWiFfmovr84p1xDlhaC2%2FOQEXaWEkAak2xnPsK1Wcduj2g6UvLNFIPOdu5v6f7AAbKbVuEmnZFx5nNFZkGoEUj8CmeDWfTUjQR7rs9iniXjvQ4RQKaYqwhj%2FrJ9Os2VFbIhaQvEvzn2i4esAYht1Sxec4KV1kdtLucRGtHjPf9wWOgQGs0lqC6wx6LfZbEVYwFx%2B0fnVY9qq0obhbcwx04En%2BqosSgQNJfWZhIMVbRS5xsfU16WUMONfEYsg252Evtu1Y%2FAjfM1DtahQfpQL1h0whJBNYd7IvBQnZLHBz7D8IFJ9OVuuB5BHrUBic%2Bgt%2B27Q9N0LLiQ0AKVp%2F8gGuuMLowk%2BLnowY6hQKw7JTf1M2eTep86p%2FnsB3czKGU3cCbbLNQUb5wFu8pNxMGyEy1XmGNwCvD%2ByUYdUj9uvu2zQi4UXKm6uyOmkvvLqU61udLEaf%2FVvp1awttEZtHdbw6masvVyMEsHwWGFfymiWsXAs2EryU7kbbtulhzpO1wbMitzsga7fCRZIOunfI2W64vaGeAOn1E%2BxG6B5lskKXizIc%2FaVF6yQ99WOkYJ3R5eItFM2E%2By3axPUOwd4QSig56cg%2FtNY1lxrWeGeySBrBQ0993w38js6nJYLsT0iNxA0V6yMohrev5uP7J57DDud5bciao2BmIeOUEgtk7qxUXVpBddtiAEFWDHlKd1MogEA%3D"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .txt
        </Link>
        &emsp;
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA4_centres.xlsx?AWSAccessKeyId=ASIAYCCKBJRXR4ZIN5GI&Expires=1685716214&Signature=%2F5aM2ouxrtfhxuulNF7RSbevlCY%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIAr%2BO9hYVw9jzw%2FJKj%2BT6hmVtHEShOInaggmqKY1bmTAiASfELEwPSWj1G8pXPeXuAC3hmt%2FcnjKDrBXlPS6OuzairrBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMopcmfF3VZgtYyRY2Kr8E2Rp6sRITnb8kWGMRa%2BJPkYQzXGJjIcENkRFmNv2U15tHrw02rrcz6HB8ZF%2Fq44GnxSMKdRaiDFny2zntF6lZpEz62ALuetXd4AJZqnh9%2B04O5WskJ%2Fy4S6WYhqXWfd4Bt0avXJ%2Bw5jrCwbhROqgJTOQQkhBQ1aWUjql02TuIxJSJ2WBob4%2BztX9kyxxl4piQqzkWAR%2BHxdvu5orUSChuSu7p4RyYTc2Ph2VIXBsjxgLF9tkv%2FSZJiQx4G3aqazg6WJypZXKSr8udhuICjsDT5gyWw%2B3hd2kkC7IMpPnITmFUo92KaX4F8KyYJztc5L8rKfoI6NbmKYvrMkRBTnM1QCuhXavg0Ffbeq%2BmRti%2FYZoXUYAR%2BEjvn5TAqxv%2FkthdeTp1heoo2QOJhwbOO%2F5fLNUmsZ3sPwN9jGzBKTiWiFfmovr84p1xDlhaC2%2FOQEXaWEkAak2xnPsK1Wcduj2g6UvLNFIPOdu5v6f7AAbKbVuEmnZFx5nNFZkGoEUj8CmeDWfTUjQR7rs9iniXjvQ4RQKaYqwhj%2FrJ9Os2VFbIhaQvEvzn2i4esAYht1Sxec4KV1kdtLucRGtHjPf9wWOgQGs0lqC6wx6LfZbEVYwFx%2B0fnVY9qq0obhbcwx04En%2BqosSgQNJfWZhIMVbRS5xsfU16WUMONfEYsg252Evtu1Y%2FAjfM1DtahQfpQL1h0whJBNYd7IvBQnZLHBz7D8IFJ9OVuuB5BHrUBic%2Bgt%2B27Q9N0LLiQ0AKVp%2F8gGuuMLowk%2BLnowY6hQKw7JTf1M2eTep86p%2FnsB3czKGU3cCbbLNQUb5wFu8pNxMGyEy1XmGNwCvD%2ByUYdUj9uvu2zQi4UXKm6uyOmkvvLqU61udLEaf%2FVvp1awttEZtHdbw6masvVyMEsHwWGFfymiWsXAs2EryU7kbbtulhzpO1wbMitzsga7fCRZIOunfI2W64vaGeAOn1E%2BxG6B5lskKXizIc%2FaVF6yQ99WOkYJ3R5eItFM2E%2By3axPUOwd4QSig56cg%2FtNY1lxrWeGeySBrBQ0993w38js6nJYLsT0iNxA0V6yMohrev5uP7J57DDud5bciao2BmIeOUEgtk7qxUXVpBddtiAEFWDHlKd1MogEA%3D"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .xlsx
        </Link>
      </div>
    </div>
  );
}

export default LGACentre;
