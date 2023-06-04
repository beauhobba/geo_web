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
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
      }}
    >
      <div style={{ color: colors.txt }}>
        <h style={{ fontSize: 30 }}>LGA Centroids</h>
      </div>
      <div
        style={{ flexDirection: "row", display: "flex", color: colors.txt_2 }}
      >
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>LATITUDE: Latitude of mesh block centre </li>
            <li>LONGITUDE: Longitude of mesh block centre</li>
            <li>LGA_CODE22: Code of the LGA</li>
            <li>LGA_NAME22: Name of the LGA</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>STE_NAME21: Name of a state or province</li>
            <li>STE_CODE21: Code or identifier for a state or province</li>
            <li>AREASQKM: Area measurement in square kilometers</li>
            <li>SHAPE_Leng: Shape length of LGA</li>
            <li>SHAPE_Area: Shape area of LGA</li>
          </ul>
        </div>
      </div>
      <div>
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/LGA_centres.txt?AWSAccessKeyId=ASIAYCCKBJRXWAWVQOXR&Expires=1685855736&Signature=xMbd8JWFTQew9SIj%2BVL%2F4Td8gQU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIhi4TFqB8e8guAxV0qvIdmdlUaLHcXfobBjQZ0SFpLOAiAVahFnPbIznzRFncora0f8Au7N0mL85alc7m0nj5ehcyrrBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMBDA7Ly9OBLC%2FLT83Kr8E1eFhlM%2BhwP2utNA6AhGuikLzQBJG7vlvIhAgA5rZCtx0GHB9PUC6hZcrDHc0P4yYzN%2BZY3fxkRMwtyT2aBSbhPtBcwRQee7nk%2BdQYtws4BhNG8MY7NiJXOAAzm21oVDX%2FgT%2FAPpuOZ%2F8fU3%2FTzbPJ%2FrgHiKvCdWkXBwCzgyTAC84LB%2FazJ%2BJkSCpzEMbkKxrIvaBqdp4N667XFdn%2Bb52ssmk%2FKqbKWeRysiREfX8q4nc1FpDk5z2QM4vjG2JRBjVr%2B2S%2F5uNfk9iiHwkcja%2ByqmFhBavKBoGcH2ijM%2BoFzkza3BTqrq6xNz3c2f8pZa6c%2FTWPScyyRT6WOrT4ONEKC4x6DWT6EftCHqRi5NJp5sbUYrvqtGd1AQR5X4ZiQ7knCkba3zmTTExfp8VS3v9kczlPZ5jFGhC%2Fl9J7bKvNLn6IVV3FGeynvQXE5DhtlEMkORmJRqWEsew3nL%2F5g%2BWXA4GGGK7FE7R7gh20bGs1kT9%2FXWGp%2FexwAUL52nreqYZPhgqmdPNIM05UABEyS7mky3QWHiN2U4gBzWbP9OyDTYr%2FJQcxpp%2FN525mnYDbYPhWNpEsM1h1lIwKwswi%2FegioUS3Tj65h5LvC3l33ECvG1f7lI%2BlMg6EYZ9HF31lZjljA%2BYb7Bk%2FIB4%2Bg4L%2FqW9T5xUq6VVaOn8QVimw4f78wnChEWVfcIsN875SiE2u%2B2Vn8vOQfgNXCvKDlVOMiZbh%2F%2Bkj2UEPrYzG4UVkcsPBqzzpygBEkPtOfpxAnKX%2Bj4wkrXwowY6hQL9QjVgzPgogFtNG%2BgH2h40pTUsEzDrk0J8KeyhbRtjRwTvJGpcx%2B5BaXVAlSKPkVyX904DbO3fw3Yw9YfnkBMchopOKAdMOsihybV436N8G1VzDk%2Fr4iOgnmKVKR7sL80W4mHix3Y0ImNopi7r1o82j5Mt9ZMkoliwDVTUyn0dUR8utslsXq4B1GguWqcR24UQK%2BWNoBeI1kGOzXhECkkcbNHg6ohHSpuJg6F1853H3juDetz%2FS1h3IJHYstE8FWK4jafJypyu%2BObNkYM5LTzWanh3Jz1F2mSSXJt6VVI1ldaslUshC96ZEb0cnauXppSXxatRzmzVNeTmhd2%2BoTLsj3Phcy0%3D"
          target="_blank"
          download
          style={{ color: colors.txt_2 }}
        >
          .txt
        </Link>
        &emsp;
        <Link
          to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/lga_centres.xlsx?AWSAccessKeyId=ASIAYCCKBJRXWAWVQOXR&Expires=1685855726&Signature=VpGglcYbXvmuvtAozngmnH2IbwI%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAIhi4TFqB8e8guAxV0qvIdmdlUaLHcXfobBjQZ0SFpLOAiAVahFnPbIznzRFncora0f8Au7N0mL85alc7m0nj5ehcyrrBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMBDA7Ly9OBLC%2FLT83Kr8E1eFhlM%2BhwP2utNA6AhGuikLzQBJG7vlvIhAgA5rZCtx0GHB9PUC6hZcrDHc0P4yYzN%2BZY3fxkRMwtyT2aBSbhPtBcwRQee7nk%2BdQYtws4BhNG8MY7NiJXOAAzm21oVDX%2FgT%2FAPpuOZ%2F8fU3%2FTzbPJ%2FrgHiKvCdWkXBwCzgyTAC84LB%2FazJ%2BJkSCpzEMbkKxrIvaBqdp4N667XFdn%2Bb52ssmk%2FKqbKWeRysiREfX8q4nc1FpDk5z2QM4vjG2JRBjVr%2B2S%2F5uNfk9iiHwkcja%2ByqmFhBavKBoGcH2ijM%2BoFzkza3BTqrq6xNz3c2f8pZa6c%2FTWPScyyRT6WOrT4ONEKC4x6DWT6EftCHqRi5NJp5sbUYrvqtGd1AQR5X4ZiQ7knCkba3zmTTExfp8VS3v9kczlPZ5jFGhC%2Fl9J7bKvNLn6IVV3FGeynvQXE5DhtlEMkORmJRqWEsew3nL%2F5g%2BWXA4GGGK7FE7R7gh20bGs1kT9%2FXWGp%2FexwAUL52nreqYZPhgqmdPNIM05UABEyS7mky3QWHiN2U4gBzWbP9OyDTYr%2FJQcxpp%2FN525mnYDbYPhWNpEsM1h1lIwKwswi%2FegioUS3Tj65h5LvC3l33ECvG1f7lI%2BlMg6EYZ9HF31lZjljA%2BYb7Bk%2FIB4%2Bg4L%2FqW9T5xUq6VVaOn8QVimw4f78wnChEWVfcIsN875SiE2u%2B2Vn8vOQfgNXCvKDlVOMiZbh%2F%2Bkj2UEPrYzG4UVkcsPBqzzpygBEkPtOfpxAnKX%2Bj4wkrXwowY6hQL9QjVgzPgogFtNG%2BgH2h40pTUsEzDrk0J8KeyhbRtjRwTvJGpcx%2B5BaXVAlSKPkVyX904DbO3fw3Yw9YfnkBMchopOKAdMOsihybV436N8G1VzDk%2Fr4iOgnmKVKR7sL80W4mHix3Y0ImNopi7r1o82j5Mt9ZMkoliwDVTUyn0dUR8utslsXq4B1GguWqcR24UQK%2BWNoBeI1kGOzXhECkkcbNHg6ohHSpuJg6F1853H3juDetz%2FS1h3IJHYstE8FWK4jafJypyu%2BObNkYM5LTzWanh3Jz1F2mSSXJt6VVI1ldaslUshC96ZEb0cnauXppSXxatRzmzVNeTmhd2%2BoTLsj3Phcy0%3D"
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
