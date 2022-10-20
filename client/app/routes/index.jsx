import { Link } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div>
      <div className="px-12 py-32 text-center text-gray-200 bg-gray-800">
        <h1 className="text-5xl text-gray-100">New arrivals are here</h1>
        <p className="px-8 mt-2 font-semibold text-gray-300">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-2 mt-8 text-sm font-semibold text-gray-700 transition duration-300 bg-gray-100 rounded-md hover:bg-white hover:text-gray-900 hover:scale-110 color"
        >
          Shop New Arrivals
        </Link>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "80vw",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22fw/img/item_08_01.jpg"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
          <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1661285408-timberland-hoodie-1661285401.jpg?crop=1xw:1xh;center,top&resize=480:*"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20210420/1o3B/607eccfeaeb269a9e3972a05/-473Wx593H-462323964-purple-MODEL.jpg"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
          <img
            src="https://www.beyoung.in/api/cache/catalog/products/sage_green_cargo_men_Jogger_pants/sage_green_cargo_men_jogger_pants_base_23_2_2022_400x533.jpg"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11451786/2020/2/14/0c5a47f2-ed88-4e4c-8011-c8fcfbb33a251581676529318-Puma-Men-Track-Pants-31581676526538-1.jpg"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0752/6435/products/watergreen2.jpg?v=1661154047"
            style={{
              height: Math.floor(Math.random() * 100) + 300,
              borderRadius: "10px",
            }}
          />
        </section>
      </div>
    </div>
  );
}
