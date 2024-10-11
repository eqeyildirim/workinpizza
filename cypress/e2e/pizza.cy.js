describe("Sıkıntı, panik, endişe yok", () => {
  it("site açılıyor mu?", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Teknolojik Yemekler");
  });
});

describe("Pizza siparişi", () => {
  beforeEach(() => {
    //arrange
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="orderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
  });

  it("sipariş sayfasını açılıyor mu?", () => {
    //assert
    cy.url().should("include", "/OrderPizza");
  });

  it("input girilmediğinde fırına yolla butonu devre dışımı?", () => {
    //assert
    cy.get('[data-cy="submit-orderPizza-form"]').should("be.disabled");
  });

  it("sipariş formunda herhangi bir problem oluşuyor mu?", () => {
    //act
    cy.get('[data-cy="input-dough"]').select('Kalın');
    cy.get('[data-cy="checkbox-1"]').check({ force: true });
    cy.get('[data-cy="checkbox-2"]').check({ force: true });
    cy.get('[data-cy="checkbox-3"]').check({ force: true });
    cy.get('[data-cy="checkbox-4"]').check({ force: true });
    cy.get('[data-cy="input-username"]').type("ege");
    cy.get('[data-cy="input-orderNote"]').type("sucuğu bol koy");
    cy.get('[data-cy="submit-orderPizza-form"]').click();
    //assert
    cy.url().should("include", "/success");
  });
});

describe("Başarısız", () => {
  it("En az 4 en fazla 10 ek malzeme işaretlenmezse, en az 3 karakter isim ve sipariş notu yazılmazsa hata verir", () => {
    //arrange
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="orderPizza"]').as('OrderPizzaLink');
    //act
    cy.get("@OrderPizzaLink").click();
    cy.get('[data-cy="checkbox-1"]').check({ force: true }).uncheck({ force: true });
    cy.get('[data-cy="checkbox-2"]').check({ force: true }).uncheck({ force: true });
    cy.get('[data-cy="checkbox-3"]').check({ force: true }).uncheck({ force: true });
    cy.get('[data-cy="checkbox-4"]').check({ force: true }).uncheck({ force: true });
    cy.get('[data-cy="input-username"]').type("eg");
    cy.get('[data-cy="input-orderNote"]').type("e");
    //assert
    cy.contains("Lütfen en az 3 karakterden oluşan bir isim girin.").should("be.visible");
    cy.contains("Lütfen bir sipariş notu girin.").should("be.visible");
    cy.contains("Lütfen en az 4 ve en fazla 10 seçenek seçin.").should("be.visible");
  });
});
