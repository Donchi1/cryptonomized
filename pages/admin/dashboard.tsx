
import StatusCard from '@/components/StatusCard' 
import ChartLine from '@/components/ChartLine' 
import ChartBar from '@/components/ChartBar' 
import PageVisitsCard from '@/components/PageVisitsCard' 
import FooterAdmin from '@/components/admin/FooterAdmin'
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminTrafficCard from "@/components/admin/AdminTrafficCard"
import AdminNavbar from "@/components/admin/AdminNavbar"
import useCollectionGroup from "@/components/hooks/UseCollectionGroup"
import AdminStatusCard from "@/components/admin/AdminStatusCard"
import UsersCarousel from "@/components/admin/UsersCarousel"
import useGetDocWithClause from "@/components/hooks/UseGetDocWithClause"

export default function Dashboard() {

  const [transactions] = useCollectionGroup(`transactionDatas`)
  const [payments] = useCollectionGroup(`paymentDatas`)
  const [investments] = useCollectionGroup(`investmentDatas`)
  const [withdrawals] = useCollectionGroup(`withdrawalDatas`)
  const [users] = useGetDocWithClause({colls: "users", q:{path: "isAdmin", condition: "==", value: false}})
 
 const filteredTrans = transactions?.splice(0, 10 ).sort((a, b) => b.date - a.date)
 


//handle Users information
  const totalBalance = users?.reduce((acc, init) =>  acc + Number(init.mainBalance),0)
  const allDeposits = users?.reduce((acc, init) =>  acc + Number(init.initialDeposit),0)
  const allInterests = users?.reduce((acc, init) =>  acc + Number(init.interestBalance),0)
  const allProfits = users?.reduce((acc, init) =>  acc + Number(init.profit),0)

//Get all pending withdrawals
const pendingWithdrawals = withdrawals?.filter(each => each.status === "pending")
//Get all completed investments & running Investments
const completedInvestments = investments?.filter(each => each.status === "success")
const runningInvestments = investments?.filter(each => each.status === "pending")





  const initialDCheck = () => {
    const initialNumber = allDeposits
    if (initialNumber === 1000) {
      return 10
    }
    if (initialNumber <= 1100 && initialNumber > 3000) {
      return 50
    }
    if (initialNumber <= 3100 && initialNumber > 5000) {
      return 70
    }
    if (initialNumber >= 7000) {
      return 100
    }
    return 0
  }

  const totalDCheck = () => {
    const initialNumber = totalBalance
    if (initialNumber === 1000) {
      return 10
    }
    if (initialNumber <= 1100 && initialNumber > 3000) {
      return 50
    }
    if (initialNumber <= 3100 && initialNumber > 5000) {
      return 70
    }
    if (initialNumber >= 7000) {
      return 100
    }
    return 0
  }
  const interestDCheck = () => {
    const initialNumber = allInterests
    if (initialNumber === 1000) {
      return 10
    }
    if (initialNumber <= 1100 && initialNumber > 3000) {
      return 50
    }
    if (initialNumber <= 3100 && initialNumber > 5000) {
      return 70
    }
    if (initialNumber >= 7000) {
      return 100
    }
    return 0
  }
  const profitDCheck = () => {
    const initialNumber = allProfits
    if (initialNumber === 1000) {
      return 10
    }
    if (initialNumber <= 1100 && initialNumber > 3000) {
      return 50
    }
    if (initialNumber <= 3100 && initialNumber > 5000) {
      return 70
    }
    if (initialNumber >= 7000) {
      return 100
    }
    return 0
  }

  const secondStatusCheck = (initialNumber:number) => {
   
    if (initialNumber === 5) {
      return 10
    }
    if (initialNumber <= 10 && initialNumber > 30) {
      return 50
    }
    if (initialNumber <= 30 && initialNumber > 60) {
      return 70
    }
    if (initialNumber >= 61) {
      return 100
    }
    return 0
  }

  return (
    <>
    <AdminNavbar/>
    
    <div className='flex gap-8'>
   
    <AdminSidebar />
   
    <div className="footer-bg  homepage-3">
      <div className=" px-3 md:px-8 h-20 pt-10 " />

      <div className="px-3 md:px-8">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 text-white">
            <StatusCard
              color="red"
              icon="money"
              title="Initials"
              amount={allDeposits}
              percentage={initialDCheck()}
              percentageIcon={
                initialDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={initialDCheck() > 50 ? 'green' : 'red'}
              date="Last month"
            />
            <StatusCard
              color="orange"
              icon="storage"
              title="Balances"
              amount={totalBalance}
              percentage={totalDCheck()}
              percentageIcon={
                totalDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={totalDCheck() > 50 ? 'green' : 'red'}
              date="Last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Profits"
              amount={allProfits}
              percentage={profitDCheck()}
              percentageIcon={
                profitDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={profitDCheck() > 50 ? 'green' : 'red'}
              date="Yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Interests"
              amount={allInterests}
              percentage={interestDCheck()}
              percentageIcon={
                interestDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={interestDCheck() > 50 ? 'green' : 'red'}
              date="Last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 ">
        <div className="">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 lg:px-4 mb-4">
              <ChartLine />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 lg:px-4 mb-3">
              <ChartBar />
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-3 md:px-8">
        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 text-white">
            <AdminStatusCard
              color="red"
              icon="users"
              title="All Users"
              
              amount={users?.length}
              percentage={secondStatusCheck(users.length)}
              percentageIcon={
                secondStatusCheck(users.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={secondStatusCheck(users.length) > 50 ? 'green' : 'red'}
              date="Since last month"
            />
            <AdminStatusCard
              color="orange"
              icon="rInvestments"
              title="R-Investments"

              amount={runningInvestments.length}
              percentage={secondStatusCheck(runningInvestments.length)}
              percentageIcon={
                secondStatusCheck(runningInvestments.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={secondStatusCheck(runningInvestments.length) > 50 ? 'green' : 'red'}
              date="last week"
            />
            <AdminStatusCard
              color="purple"
              icon="cInvestments"
              title="C-Investments"
              amount={completedInvestments.length}
              percentage={secondStatusCheck(completedInvestments.length)}
              percentageIcon={
                secondStatusCheck(completedInvestments.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={secondStatusCheck(completedInvestments.length) > 50 ? 'green' : 'red'}
              date="yesterday"
            />
            <AdminStatusCard
              color="blue"
              icon="pendingW"
              title="P-Withdrawals"
              amount={pendingWithdrawals.length}
              percentage={secondStatusCheck(pendingWithdrawals.length)}
              percentageIcon={
                secondStatusCheck(pendingWithdrawals.length) > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={secondStatusCheck(pendingWithdrawals.length) > 50 ? 'green' : 'red'}
              date="last month"
            />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto">
        <div className="">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 lg:px-4 mb-12">
              <PageVisitsCard
                current="admin"
                transactions={filteredTrans}
              />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 lg:px-4 mb-12">
              <AdminTrafficCard
                profile={{allInterests, allDeposits, allProfits, totalBalance}}
                payments={payments}
                investments={investments}
                total={totalDCheck()}
                initial={initialDCheck()}
                interest={interestDCheck()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto mb-12">
        <div className="">
          <div className="grid grid-cols-1 main-bg rounded-lg px-4 pt-4 pb-4 pb-lg-3    mx-lg-3 xl:grid-cols-3">
          <UsersCarousel users={users} />
          </div>
        </div>
      </div>
   <FooterAdmin/>
    </div>
    </div>
    </>
  )
}

Dashboard.defaultProps ={
  needsAuth: true,
  isAdmin: true

}