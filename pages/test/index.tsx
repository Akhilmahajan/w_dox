import styles from './Test.module.css'
import img from '../../assets/images/investment.svg'
import InvestmentsCard from '../../components/InvestmentsCard/InvestmentsCard'
// import dynamic from 'next/dynamic'
// const DynamicLazyDoughnutChart = dynamic(
//   () => import('../../components/DoughnutChartVisx/DoughnutChart'),
//   {
//     ssr: false,
//   }
// )

export default function Test() {
  return (
    <InvestmentsCard
      button={{ text: 'Join DAO', url: '' }}
      text="Decentralized regulation lives and dies with the DAO. The DAO is the nerve center of the project."
      title="DAO"
      img={img}
    />
  )
}
