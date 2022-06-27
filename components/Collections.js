import Collection from "../components/data/collection-data.json";
import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  //   console.log(Collection);
  return (
    <>
      <div className="row g-3">
        {Collection.map((data) => {
          return (
            <div key={data.id} className="col-lg-3 col-md-4 col-sm-6">
              <Link href="/detail">
                <a>
                  <div
                    className="customCard"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="px-3">
                      <div className="imageBorder position-relative">
                        <img className="w-100" src={data.img} alt="" />
                        <div className="floatingImage">
                          <img src={data.img} alt="" />
                        </div>
                      </div>
                      <h4>@{data.author}</h4>
                      <h1>{data.name}</h1>
                    </div>
                    <div className="cardBottom px-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex currency align-items-center">
                          <img src="/assets/imgs/bitcoin.svg" alt="" />
                          <img src="/assets/imgs/ethereum.svg" alt="" />
                        </div>
                        <div className="d-flex price align-items-center">
                          <p>Price:</p>
                          <h2>${data.price}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
