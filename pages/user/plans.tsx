import React from "react";
import Plans from "../../components/Plans";
import AdminNavbar from "@/components/user/UserNavbar";
import Sidebar from "@/components/user/Sidebar";
import Layout from "@/components/Layout";
import UserHero from "@/components/user/UserHero";
import FooterUser from "@/components/user/FooterUser";

export default function Dashboard() {
  return (
    <>
      <AdminNavbar />
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <Layout>
            <UserHero title="Plans" />
            <section className="footer-bg homepage-3 mb-8">
              <section className="">
                <div className="col-md-12">
                  <div className="row sm:space-y-4">
                    <div className="text-center text-4xl my-12 ">
                      <h2>Basic Plans</h2>
                    </div>
                    <div className="col-lg-4 col-sm-12  ">
                      <Plans
                        initiald={"100"}
                        initialw={"2900"}
                        head={"Basic"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12 plan-spacing  ">
                      <Plans
                        initiald={"200"}
                        initialw={"4000"}
                        head={"Basic"}
                      />
                    </div>
                    <div className="col-lg-4  col-sm-12">
                      <Plans
                        initiald={"300"}
                        initialw={"5300"}
                        head={"Basic"}
                      />
                    </div>
                  </div>
                  <div className="row sm:space-y-4">
                    <div className="text-center text-4xl my-12 ">
                      <h2> Advanced Plans</h2>
                    </div>
                    <div className="col-lg-4 col-sm-12 plan-spacing  ">
                      <Plans
                        initiald={"400"}
                        initialw={"6000"}
                        head={"Advance"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12  ">
                      <Plans
                        initiald={"500"}
                        initialw={"7900"}
                        head={"Advance"}
                      />
                    </div>
                    <div className="col-lg-4 plan-spacing  col-sm-12">
                      <Plans
                        initiald={"600"}
                        initialw={"9500"}
                        head={"Advance"}
                      />
                    </div>
                  </div>
                  <div className="row sm:space-y-4">
                    <div className="text-center text-4xl my-12 ">
                      <h2> Ultimate Plans</h2>
                    </div>

                    <div className="col-lg-4 col-sm-12  ">
                      <Plans
                        initiald={"700"}
                        initialw={"10,200"}
                        head={"Ultimate"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12 plan-spacing ">
                      <Plans
                        initiald={"800"}
                        initialw={"12,600"}
                        head={"Ultimate"}
                      />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <Plans
                        initiald={"900"}
                        initialw={"15,750"}
                        head={"Ultimate"}
                      />
                    </div>
                    <div className="col-lg-4 plan-spacing col-sm-12">
                      <Plans
                        initiald={"1000"}
                        initialw={"22,440"}
                        head={"Ultimate"}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </Layout>
        </div>
      </div>
          <FooterUser />
    </>
  );
}
