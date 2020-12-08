<template>
  <div>
    <div class="p-grid">
      <div class="p-col-2"></div>
      <div class="p-col-8">
        <div>
          <h3>{{ message }}</h3>
        </div>
      </div>
      <div class="p-col-2"></div>
    </div>
    <div class="p-grid">
      <div class="p-col-2"></div>
      <div class="p-col-8">
        <Card>
          <template #content>
            <DataTable :value="cars">
              <Column field="vin" header="Endpoint Name"></Column>
              <Column field="year" header="Year"></Column>
              <Column field="brand" header="Brand"></Column>
              <Column field="color" header="Color"></Column>
            </DataTable>
          </template>
        </Card>
      </div>
      <div class="p-col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "WayPi - API Catalog",
      endpoints: [
        {
          id: 1,
          name: "Country Names",
          ownedBy: "Cost Team",
          url: "https://api.openaq.org/v1/countries",
          description: "See history of data update attempts by the platform.",
        },
        {
          id: 2,
          name: "API Name 1",
          ownedBy: "Cost Team",
          url: "https://api.openaq.org/v1/fetches",
          description: "See history of data update attempts by the platform.",
        },
      ],
      cars: [
        { brand: "Volkswagen", year: 2012, color: "Orange", vin: "dsad231ff" },
        { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
        { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
        { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
        { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
        { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
        { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
        { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
        { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
        { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

