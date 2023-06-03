import { Link } from "react-router-dom";
import { Amplify} from "aws-amplify";

import awsconfig from "../../aws-exports";
import colors from "../Colours"

// this can be added in index.js as well
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

function SA1Centre() {
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
        <div style={{ color: colors.txt, justifyItems: 'center', backgroundColor: colors.box}}>
          <h style={{ fontSize: 30 }}>SA1 Centroids</h>
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
                      <li>STE_NAME21: Name of a state or province</li>
                  </ul>
              </div>
              <div>
                  <ul  style={{ listStyle: 'none', padding: 0 }}>

                      <li>STE_CODE21: Code or identifier for a state or province</li>
                      <li>AREASQKM21: Area measurement in square kilometers</li>
                      <li>
                          SA1_CODE21: Code or identifier for Statistical Area Level 1
                          (SA1)
                      </li>
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
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/mesh_centres.txt"
                  target="_blank"
                  download
                  style={{color: colors.txt_2}}
              >
                  .txt
              </Link>
              &emsp;
              <Link
                  to="https://geo145327-staging.s3.ap-southeast-2.amazonaws.com/public/mesh_centres.xlsx?AWSAccessKeyId=ASIAYCCKBJRX6DYZWTQP&Expires=1685693999&Signature=mpu4qohV%2Fpet1bta3BgMHMI7cU0%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAOWVRehAQ3p4LeXBBiSFEYF7i6CQ8jLzTOoGrTFgaeCcAiAYg%2BCdoaZneFQODmPddCvyxFr4%2BbFhPxTFjXOf63K4dCrrBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDU1NDIwNjA1NTUzNSIMzY3UbQBwi2mIQNivKr8EnImbriLMC1Xco6rP4DQimd6w1ZmWXBWl8PMDKAhMRgSzXAwrmGsz6UTiV%2BXlNviglS3S30jYNsuZaMuls79wCRv%2BuNb2ZVVheVpC6JLjZf1HyHMh0lrm4ATFXzKqECL0sEEeU%2FLnqHq9%2BEj2l4uJ8N7kW%2BqJ9CYuhhrO0F6CiJ7rlLrZNNglWx3bOnuL6RKqhb0hF3sqm%2BQRNYSHSpFXHfCUplr1Jh0ATSKhTzxud7%2F1jKzRfpPnJ7sJT1ToKVy%2F%2FlAV5z5by2Xsml4oocnmxG3HoexloAbFovJJog3hNkFobJvZVvRAj24KRdHsjxe%2Bp9fu4DlsaHWmGOnSwo80pWR9XWS181eR%2FT%2FZsJUQ9JSsvB0nKbaJW0MUezT3sB9nrgpfP1vkwOp%2BidVGkk%2Bf%2BsG1kai4ORO3JN%2Bz9QLgh%2B9CI4wYlPSZbaaSuq4uref0HuVHgQWZE7HybdQNFIhIVeMJrQ9H3CDga7%2FIGvt3dI9tlwK5WDZ0Upk%2Fl3%2FZR0s7DHCmmPYlGqjqxuLKcVav5TmLQ%2FO1Ic36G5yl6wqEXV3oBPNAWbi28rXcHz0Pe6foxPiRj3vLcg8JhvU2ssQRXgkWDGHN%2F7vgqEcbDQD6KCPl%2B0e69pCp6Kk%2FE0dsIhf6drDm50VP26G1OzGj8QU0Acvac8mrMr9%2F5QjdOJ0jDbTFeXxP5fGZWyuTzg4UJ%2FBbK6seIYn1LSR4Y6VOJUPjKlkgcSr18BMDcduSmW4U3swv2ysniKiIlcmZXIYAcNgw6rbmowY6hQIxmLsR56HdfKFGQo9wvXofpgjL%2F9gQnXsB%2F0B6hk1KKuQ5dbrOKT9mq7vO5ZyuHu4yytbPF1vhkXnhoWPCaELRVrWq%2FXdKKrFz5zaKhvzOXyrZEhzXXD88vFMqL8VLT0D93%2Bne32S%2F3dGB%2BFHtB3pjHwTwOjnHKl7dDlGHlxZlnBcxvaXUBz29GvJO%2F5IFOnX0jW70U8ODMDv0m0rqFUDmHZzjgxluGbIAFgcM9auUz1sg%2B9FYoaZljq%2FUfnOlCoBRjwOACGnBy6gBejGS6flvPvddgzrO3Or77ZD8WdHRe3q1lArkn8Yqemh%2F7q1uPXF%2BJ8lRgVC5Vufb83jwBCGTOqmCnZQ%3D"
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

export default SA1Centre;
