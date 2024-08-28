<template>
  <h1>Funds</h1>
  <div v-for="fund in funds" :key="fund.id" class="job">
    <router-link :to="{ name: 'FundDetails', params: { id: job.id } }">
      <h2>{{ fund.fundName }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: [
        {
          id: 1,
          fundName: "Growth Equity Fund",
          description:
            "A high-risk fund that invests in rapidly growing companies.",
          investmentType: "Equity",
          performanceHistory: "10% annualized return over the past 5 years",
          NAV: "$100 million",
        },
        {
          id: 2,
          fundName: "Balanced Income Fund",
          description: "A moderate-risk fund with a mix of stocks and bonds.",
          investmentType: "Balanced",
          performanceHistory: "6% annualized return over the past 3 years",
          NAV: "$50 million",
        },
        {
          id: 3,
          fundName: "Fixed Income Fund",
          description:
            "A low-risk fund that primarily invests in government and corporate bonds.",
          investmentType: "Fixed Income",
          performanceHistory: "3% annualized return over the past 2 years",
          NAV: "$30 million",
        },
        {
          id: 4,
          fundName: "Technology Innovation Fund",
          description:
            "An aggressive fund focused on tech startups and disruptive innovations.",
          investmentType: "Equity",
          performanceHistory: "15% annualized return over the past 3 years",
          NAV: "$80 million",
        },
      ],
    };
  },
};
</script>
