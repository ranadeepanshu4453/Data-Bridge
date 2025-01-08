import Layout from "./Layout/Layout";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <span className="flex justify-between">
          {/* Total Users Card */}
          <div className="flex flex-row items-center gap-10 justify-between w-1/5 h-20 bg-slate-200 p-4 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="text-center">
              <p className="font-semibold mt-3">Total Users</p>
              <p className="font-bold text-blue-600">146</p>
            </span>
            <span className="flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </span>
          </div>

          {/* Weekly Sales Card */}
          <div className="flex flex-row items-center gap-10 justify-between w-1/5 h-20 bg-slate-200 p-4 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="text-center">
              <p className="font-semibold mt-3">Weekly Sales</p>
              <p className="font-bold text-blue-600">110%</p>
            </span>
            <span className="flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><defs></defs><path d="m30,6v-2h-3v-2h-2v2h-1c-1.1028,0-2,.8975-2,2v2c0,1.1025.8972,2,2,2h4v2h-6v2h3v2h2v-2h1c1.1028,0,2-.8975,2-2v-2c0-1.1025-.8972-2-2-2h-4v-2h6Z"></path><path d="m24,20v2h2.5859l-3.5857,3.5859-2.2917-2.293c-.1875-.1875-.4419-.293-.707-.293h-.0015c-.2651,0-.5183.1055-.7058.293l-5.2942,5.293,1.4143,1.4141,4.5867-4.5859,2.2917,2.293c.1875.1875.4419.293.7073.293.2651,0,.5195-.1055.707-.293l4.293-4.293v2.5859h2v-6h-6Z"></path><path d="m4,30h-2v-5c0-3.8599,3.1401-7,7-7h6c1.9885,0,3.8901.8502,5.217,2.3328l-1.4902,1.334c-.948-1.0592-2.3064-1.6667-3.7268-1.6667h-6c-2.7571,0-5,2.243-5,5v5Z"></path><path d="m12,16c3.866,0,7-3.134,7-7s-3.134-7-7-7-7,3.134-7,7,3.134,7,7,7Zm0-12c2.7615,0,5,2.2385,5,5s-2.2385,5-5,5-5-2.2385-5-5c.0032-2.7601,2.2399-4.9968,5-5Z"></path><rect id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;" class="cls-1" width="32" height="32" style={{ fill: "none" }}></rect></svg>
            </span>
          </div>

          {/* Monthly Sales Card */}
          <div className="flex flex-row items-center gap-10 justify-between w-1/5 h-20 bg-slate-200 p-4 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="text-center">
              <p className="font-semibold mt-3">Monthly Sales</p>
              <p className="font-bold text-blue-600">22%</p>
            </span>
            <span className="flex items-center justify-center">
            <svg class="text-blue-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><defs></defs><path d="m30,6v-2h-3v-2h-2v2h-1c-1.1028,0-2,.8975-2,2v2c0,1.1025.8972,2,2,2h4v2h-6v2h3v2h2v-2h1c1.1028,0,2-.8975,2-2v-2c0-1.1025-.8972-2-2-2h-4v-2h6Z"></path><path d="m24,20v2h2.5859l-3.5857,3.5859-2.2917-2.293c-.1875-.1875-.4419-.293-.707-.293h-.0015c-.2651,0-.5183.1055-.7058.293l-5.2942,5.293,1.4143,1.4141,4.5867-4.5859,2.2917,2.293c.1875.1875.4419.293.7073.293.2651,0,.5195-.1055.707-.293l4.293-4.293v2.5859h2v-6h-6Z"></path><path d="m4,30h-2v-5c0-3.8599,3.1401-7,7-7h6c1.9885,0,3.8901.8502,5.217,2.3328l-1.4902,1.334c-.948-1.0592-2.3064-1.6667-3.7268-1.6667h-6c-2.7571,0-5,2.243-5,5v5Z"></path><path d="m12,16c3.866,0,7-3.134,7-7s-3.134-7-7-7-7,3.134-7,7,3.134,7,7,7Zm0-12c2.7615,0,5,2.2385,5,5s-2.2385,5-5,5-5-2.2385-5-5c.0032-2.7601,2.2399-4.9968,5-5Z"></path><rect id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;" class="cls-1" width="32" height="32" style={{ fill: "none" }}></rect></svg>
            </span>
          </div>

          {/* Yearly Sales Card */}
          <div className="flex flex-row items-center gap-10 justify-between w-1/5 h-20 bg-slate-200 p-4 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="text-center">
              <p className="font-semibold mt-3">Yearly Sales</p>
              <p className="font-bold text-blue-600">7%</p>
            </span>
            <span className="flex items-center justify-center">
            <svg class="text-blue-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><defs></defs><path d="m30,6v-2h-3v-2h-2v2h-1c-1.1028,0-2,.8975-2,2v2c0,1.1025.8972,2,2,2h4v2h-6v2h3v2h2v-2h1c1.1028,0,2-.8975,2-2v-2c0-1.1025-.8972-2-2-2h-4v-2h6Z"></path><path d="m24,20v2h2.5859l-3.5857,3.5859-2.2917-2.293c-.1875-.1875-.4419-.293-.707-.293h-.0015c-.2651,0-.5183.1055-.7058.293l-5.2942,5.293,1.4143,1.4141,4.5867-4.5859,2.2917,2.293c.1875.1875.4419.293.7073.293.2651,0,.5195-.1055.707-.293l4.293-4.293v2.5859h2v-6h-6Z"></path><path d="m4,30h-2v-5c0-3.8599,3.1401-7,7-7h6c1.9885,0,3.8901.8502,5.217,2.3328l-1.4902,1.334c-.948-1.0592-2.3064-1.6667-3.7268-1.6667h-6c-2.7571,0-5,2.243-5,5v5Z"></path><path d="m12,16c3.866,0,7-3.134,7-7s-3.134-7-7-7-7,3.134-7,7,3.134,7,7,7Zm0-12c2.7615,0,5,2.2385,5,5s-2.2385,5-5,5-5-2.2385-5-5c.0032-2.7601,2.2399-4.9968,5-5Z"></path><rect id="_Transparent_Rectangle_" data-name="&amp;lt;Transparent Rectangle&amp;gt;" class="cls-1" width="32" height="32" style={{ fill: "none" }}></rect></svg>
            </span>
          </div>

        </span>
        <div className="p-3 mt-4 w-full h-full flex gap-5">
          <span className="flex flex-row justify-center items-center gap-3 w-1/2 bg-slate-100 p-3">
            <div>
               <p>Build By Developers</p>
          <p className="font-semibold text-xl">Soft UI Log In</p>
          <pre>This Project is Developed in React Js<br />
            This Project has its backend in Laravel
          </pre>

          <a href="#" className="no-underline">Read More About Us →</a>
            </div>
          <img src="./images/login.jpg" alt="Soft UI Log In" className="h-32 rounded-lg" />
          </span>
          <span className="flex flex-row justify-center items-center gap-3 w-1/2 bg-slate-100 p-3">
            <div>
               <p>Build By Developers</p>
          <p className="font-semibold text-xl">Soft UI Register</p>
          <pre>This Project is Developed in React Js<br />
            This Project has its backend in Laravel
          </pre>

          <a href="" className="no-underline">Read More About Us →</a>
            </div>
          <img src="./images/mirror.jpg" alt="Soft UI Dashboard" className="h-32 rounded-lg" />
          </span>
          
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
