<template>
  <div>
    <div class="p-grid">
      <div class="p-col-1"></div>
      <div class="p-col-10">
        <div class="p-m-4">
          <h2>{{ message }}</h2>
        </div>
      </div>
      <div class="p-col-1"></div>
    </div>
    <div class="p-grid">
      <div class="p-col-1"></div>
      <div class="p-col-10">
        <Card class="p-shadow-7">
          <template #content>
            <Toolbar class="p-mb-4">
              <template #left>
                <Button
                  label="New"
                  icon="pi pi-plus"
                  class="p-button-success p-mr-2"
                  @click="openNew"
                />
                <Button
                  label="Delete"
                  icon="pi pi-trash"
                  class="p-button-danger"
                  @click="confirmDeleteSelected"
                  :disabled="!selectedProducts || !selectedProducts.length"
                />
              </template>

              <template #right>
                <FileUpload
                  mode="basic"
                  accept="image/*"
                  :maxFileSize="1000000"
                  label="Import"
                  chooseLabel="Import"
                  class="p-mr-2"
                />
                <Button
                  label="Export"
                  icon="pi pi-upload"
                  class="p-button-help"
                  @click="exportCSV($event)"
                />
              </template>
            </Toolbar>
            <DataTable :value="endpoints">
              <Column
                headerStyle="width: 200px"
                field="name"
                header="Endpoint Name"
              ></Column>
              <Column field="ownedBy" header="Owned By"></Column>
              <Column header="Description">
                <template #body="slotProps">
                  {{ slotProps.data.description }}
                  <div>Slack: {{ slotProps.data.slackChannel }}</div>
                  <div>
                    <a v-bind:href="slotProps.data.documentation"
                      >Documentation
                    </a>
                  </div>
                  <div>
                    <a v-bind:href="slotProps.data.url">API Url </a>
                  </div>
                </template>
              </Column>
            </DataTable>
          </template>
        </Card>
      </div>
      <div class="p-col-1"></div>
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
          slackChannel: "#channel-1",
          documentation: "https://jsdoc.app/tags-inline-link.html",
        },
        {
          id: 2,
          name: "API Name 1",
          ownedBy: "Cost Team",
          url: "https://api.openaq.org/v1/fetches",
          description: "See history of data update attempts by the platform.",
          slackChannel: "#channel-2",
          documentation: "https://developers.google.com/style/link-text",
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

