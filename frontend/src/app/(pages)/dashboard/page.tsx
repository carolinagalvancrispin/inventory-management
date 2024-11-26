'use client'

import { Github, Gitlab, Leaf, Package, Puzzle, TrendingDown, TrendingUp } from "lucide-react"
import { CardExpenseSummary } from "./CardExpenseSummary"
import { CardPopularProducts } from "./CardPopularProducts"
import { CardPurchaseSummary } from "./CardPucharseSummary"
import { CardSalesSummary } from "./CardsalesSummary"
import { StatCard } from "./StatCar"

export const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
        <CardPopularProducts/>
        <CardPurchaseSummary/>
        <CardSalesSummary/>
        <CardExpenseSummary/>
        <StatCard
        title="Categoria 1"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
          title:"venta de laptos",
          amount:"150.00",
          changePercentage:130,
          IconComponent: TrendingUp,
          },
          {
            title:"venta de laptos",
            amount:"150.00",
            changePercentage:130,
            IconComponent: TrendingDown,
            },
        ]}/>
        <StatCard
        title="Categoria 2"
        primaryIcon={<Puzzle className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
          title:"venta de laptos",
          amount:"150.00",
          changePercentage:130,
          IconComponent: TrendingUp,
          },
          {
            title:"venta de laptos",
            amount:"150.00",
            changePercentage:130,
            IconComponent: TrendingDown,
            },
        ]}/>
        <StatCard
        title="Categoria 3"
        primaryIcon={<Leaf className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
          title:"venta de laptos",
          amount:"150.00",
          changePercentage:130,
          IconComponent: TrendingUp,
          },
          {
            title:"venta de laptos",
            amount:"150.00",
            changePercentage:130,
            IconComponent: TrendingDown,
            },
        ]}/>
        <StatCard
        title="Categoria 4"
        primaryIcon={<Github className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
          title:"venta de laptos",
          amount:"150.00",
          changePercentage:130,
          IconComponent: TrendingUp,
          },
          {
            title:"venta de laptos",
            amount:"150.00",
            changePercentage:130,
            IconComponent: TrendingDown,
            },
        ]}/>
        <StatCard
        title="Categoria 5"
        primaryIcon={<Gitlab className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
          title:"venta de laptos",
          amount:"150.00",
          changePercentage:130,
          IconComponent: TrendingUp,
          },
          {
            title:"venta de laptos",
            amount:"150.00",
            changePercentage:130,
            IconComponent: TrendingDown,
            },
        ]}/>
    </div>
  );
};

export default Dashboard;
