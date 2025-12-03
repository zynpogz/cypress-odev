/// <reference types="cypress" />

describe("FakeStore API Testing", () => {

    const baseUrl = "https://fakestoreapi.com";

    // 1 - GET ürün listesi
    it("TC01 - GET /products → 200 ve array dönmeli", () => {
        cy.request(`${baseUrl}/products`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an("array");
        });
    });

    // 2 - GET tek ürün
    it("TC02 - GET /products/1 → 200 ve id=1 olmalı", () => {
        cy.request(`${baseUrl}/products/1`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.id).to.eq(1);
        });
    });

    it('TC03 - GET /products/9999 -> expect empty object', () => {
        const fakestore = Cypress.env('fakestore');

        cy.request({
            url: `${fakestore}/products/9999`,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.empty;
        });
    });

    it('TC04 - POST /products', () => {
        const fakestore = Cypress.env('fakestore');

        cy.request("POST", `${fakestore}/products`, {
            name: "Zeynep",
            job: "QA Tester",
            category: "test"
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property("id");
        });
    });



    // 5 - PUT ürün güncelle
    it("TC05 - PUT /products/1 → 200", () => {
        cy.request("PUT", `${baseUrl}/products/1`, {
            title: "Zeynep Updated"
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    // 6 - DELETE ürün sil
    it("TC06 - DELETE /products/1 → 200", () => {
        cy.request("DELETE", `${baseUrl}/products/1`).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    // 7 - Custom Header testi
    it("TC07 - GET /products?limit=5 with custom header", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}/products?limit=5`,
            headers: { "X-Test-Header": "Zeynep123" }
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    // 8 - Query param testi
    it("TC08 - GET /products?limit=2 → 200", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}/products`,
            qs: { limit: 2 }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.length).to.eq(2);
        });
    });

    // 9 - Body içinde title var mı
    it("TC09 - Ürün listesi body → title içermeli", () => {
        cy.request(`${baseUrl}/products`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body[0]).to.have.property("title");
        });
    });

    // 10 - Response time testi
    it("TC10 - Response time < 1000ms", () => {
        cy.request(`${baseUrl}/products`).then((res) => {
            expect(res.duration).to.be.lessThan(1000);
        });
    });

});
