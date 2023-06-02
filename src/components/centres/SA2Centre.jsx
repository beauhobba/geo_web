import { Link } from "react-router-dom";
import { Amplify} from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours"

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function SA2Centre() {
  return (

<div style={{backgroundColor: colors.box, marginTop: 20}}>
    <div style={{ color: colors.txt, justifyItems: 'center'}}>
          <h style={{ fontSize: 30 }}>SA2 Centroids</h>
      </div>
      <div style={{ flexDirection: "row", display: "flex",  color: colors.txt_2}}>
              <div>
                  <ul  style={{ listStyle: 'none', padding: 0 }}>
                      <li>LATITUDE: Latitude of mesh block centre </li>
                      <li>LONGITUDE: Longitude of mesh block centre</li>
                      <li>
                          LOCI_URI21: ABS URI (Uniform Resource Identifier) for the
                          location
                      </li>
                      <li>AUS_CODE21: Code or identifier for Australia</li>
                      <li>
                          GCC_CODE21: Code or identifier for a geographical classification
                          system
                      </li>
                      <li>
                          GCC_NAME21: Name of the geographical classification system
                      </li>
                      <li>AUS_NAME21:Australia</li>
                      <li>CHG_LBL21: Change value</li>
                      <li>CHG_FLAG21: Flag or indicator associated with a change</li>
                  </ul>
              </div>
              <div>
              <ul  style={{ listStyle: 'none', padding: 0 }}>
                      <li>STE_NAME21: Name of a state or province</li>
                      <li>STE_CODE21: Code or identifier for a state or province</li>
                      <li>AREASQKM21: Area measurement in square kilometers</li>
                      <li>
                          SA2_CODE21: Code or identifier for Statistical Area Level 2
                          (SA2)
                      </li>
                      <li>SA2_NAME21: Name of Statistical Area Level 2 (SA2)</li>
                      <li>
                          SA3_CODE21: Code or identifier for Statistical Area Level 3
                          (SA3)
                      </li>
                      <li>SA3_NAME21: Name of Statistical Area Level 3 (SA3)</li>
                      <li>SA3_NAME21: (Duplicate entry, please verify)</li>
                      <li>
                          SA4_CODE21: Code or identifier for Statistical Area Level 4
                          (SA4)
                      </li>
                      <li>SA4_NAME21: Name of Statistical Area Level 4 (SA4)</li>
                  </ul>
              </div>
          </div><div>
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA2_centres.txt?AWSAccessKeyId=ASIAYCCKBJRXR4ZIN5GI&Expires=1685713501&Signature=ve9bbrHiq72bcOq9gCFYw5RiuEw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIAr%2BO9hYVw9jzw%2FJKj%2BT6hmVtHEShOInaggmqKY1bmTAiASfELEwPSWj1G8pXPeXuAC3hmt%2FcnjKDrBXlPS6OuzairrBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMopcmfF3VZgtYyRY2Kr8E2Rp6sRITnb8kWGMRa%2BJPkYQzXGJjIcENkRFmNv2U15tHrw02rrcz6HB8ZF%2Fq44GnxSMKdRaiDFny2zntF6lZpEz62ALuetXd4AJZqnh9%2B04O5WskJ%2Fy4S6WYhqXWfd4Bt0avXJ%2Bw5jrCwbhROqgJTOQQkhBQ1aWUjql02TuIxJSJ2WBob4%2BztX9kyxxl4piQqzkWAR%2BHxdvu5orUSChuSu7p4RyYTc2Ph2VIXBsjxgLF9tkv%2FSZJiQx4G3aqazg6WJypZXKSr8udhuICjsDT5gyWw%2B3hd2kkC7IMpPnITmFUo92KaX4F8KyYJztc5L8rKfoI6NbmKYvrMkRBTnM1QCuhXavg0Ffbeq%2BmRti%2FYZoXUYAR%2BEjvn5TAqxv%2FkthdeTp1heoo2QOJhwbOO%2F5fLNUmsZ3sPwN9jGzBKTiWiFfmovr84p1xDlhaC2%2FOQEXaWEkAak2xnPsK1Wcduj2g6UvLNFIPOdu5v6f7AAbKbVuEmnZFx5nNFZkGoEUj8CmeDWfTUjQR7rs9iniXjvQ4RQKaYqwhj%2FrJ9Os2VFbIhaQvEvzn2i4esAYht1Sxec4KV1kdtLucRGtHjPf9wWOgQGs0lqC6wx6LfZbEVYwFx%2B0fnVY9qq0obhbcwx04En%2BqosSgQNJfWZhIMVbRS5xsfU16WUMONfEYsg252Evtu1Y%2FAjfM1DtahQfpQL1h0whJBNYd7IvBQnZLHBz7D8IFJ9OVuuB5BHrUBic%2Bgt%2B27Q9N0LLiQ0AKVp%2F8gGuuMLowk%2BLnowY6hQKw7JTf1M2eTep86p%2FnsB3czKGU3cCbbLNQUb5wFu8pNxMGyEy1XmGNwCvD%2ByUYdUj9uvu2zQi4UXKm6uyOmkvvLqU61udLEaf%2FVvp1awttEZtHdbw6masvVyMEsHwWGFfymiWsXAs2EryU7kbbtulhzpO1wbMitzsga7fCRZIOunfI2W64vaGeAOn1E%2BxG6B5lskKXizIc%2FaVF6yQ99WOkYJ3R5eItFM2E%2By3axPUOwd4QSig56cg%2FtNY1lxrWeGeySBrBQ0993w38js6nJYLsT0iNxA0V6yMohrev5uP7J57DDud5bciao2BmIeOUEgtk7qxUXVpBddtiAEFWDHlKd1MogEA%3D"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  .txt
              </Link>
              &emsp;
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/SA2_centres.xlsx?AWSAccessKeyId=ASIAYCCKBJRXR4ZIN5GI&Expires=1685713748&Signature=KRbk69UGlZuMS3VhUIMeD6kDz2U%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIAr%2BO9hYVw9jzw%2FJKj%2BT6hmVtHEShOInaggmqKY1bmTAiASfELEwPSWj1G8pXPeXuAC3hmt%2FcnjKDrBXlPS6OuzairrBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMopcmfF3VZgtYyRY2Kr8E2Rp6sRITnb8kWGMRa%2BJPkYQzXGJjIcENkRFmNv2U15tHrw02rrcz6HB8ZF%2Fq44GnxSMKdRaiDFny2zntF6lZpEz62ALuetXd4AJZqnh9%2B04O5WskJ%2Fy4S6WYhqXWfd4Bt0avXJ%2Bw5jrCwbhROqgJTOQQkhBQ1aWUjql02TuIxJSJ2WBob4%2BztX9kyxxl4piQqzkWAR%2BHxdvu5orUSChuSu7p4RyYTc2Ph2VIXBsjxgLF9tkv%2FSZJiQx4G3aqazg6WJypZXKSr8udhuICjsDT5gyWw%2B3hd2kkC7IMpPnITmFUo92KaX4F8KyYJztc5L8rKfoI6NbmKYvrMkRBTnM1QCuhXavg0Ffbeq%2BmRti%2FYZoXUYAR%2BEjvn5TAqxv%2FkthdeTp1heoo2QOJhwbOO%2F5fLNUmsZ3sPwN9jGzBKTiWiFfmovr84p1xDlhaC2%2FOQEXaWEkAak2xnPsK1Wcduj2g6UvLNFIPOdu5v6f7AAbKbVuEmnZFx5nNFZkGoEUj8CmeDWfTUjQR7rs9iniXjvQ4RQKaYqwhj%2FrJ9Os2VFbIhaQvEvzn2i4esAYht1Sxec4KV1kdtLucRGtHjPf9wWOgQGs0lqC6wx6LfZbEVYwFx%2B0fnVY9qq0obhbcwx04En%2BqosSgQNJfWZhIMVbRS5xsfU16WUMONfEYsg252Evtu1Y%2FAjfM1DtahQfpQL1h0whJBNYd7IvBQnZLHBz7D8IFJ9OVuuB5BHrUBic%2Bgt%2B27Q9N0LLiQ0AKVp%2F8gGuuMLowk%2BLnowY6hQKw7JTf1M2eTep86p%2FnsB3czKGU3cCbbLNQUb5wFu8pNxMGyEy1XmGNwCvD%2ByUYdUj9uvu2zQi4UXKm6uyOmkvvLqU61udLEaf%2FVvp1awttEZtHdbw6masvVyMEsHwWGFfymiWsXAs2EryU7kbbtulhzpO1wbMitzsga7fCRZIOunfI2W64vaGeAOn1E%2BxG6B5lskKXizIc%2FaVF6yQ99WOkYJ3R5eItFM2E%2By3axPUOwd4QSig56cg%2FtNY1lxrWeGeySBrBQ0993w38js6nJYLsT0iNxA0V6yMohrev5uP7J57DDud5bciao2BmIeOUEgtk7qxUXVpBddtiAEFWDHlKd1MogEA%3D"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  .xlsx
              </Link>
          </div>
         </div>
  );
}

export default SA2Centre;
