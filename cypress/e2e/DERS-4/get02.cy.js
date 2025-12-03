describe("API testing - assertion", () => {

    it("tc01_POST istegi assertion", () => {

        const rq = {
            method: 'POST',
            url: "https://httpbin.org/post",
            body: {
                name: "Mr.",
                role: "QA",
                age: 30
            },
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {

            // status kontrolü
            assert.equal(response.status, 200);
            expect(response.status).to.eq(200);

            // body log
            cy.log("response body ::::::: ", JSON.stringify(response.body));

            // body içindeki name alanını kontrol et
            assert.equal(response.body.json.name, "Mr.");
            expect(response.body.json.role).to.eq("QA");
            assert.equal(response.body.json.age, 30);

            assert.equal(response.body.url, "https://httpbin.org/post");

            expect(response.body.json).to.deep.eq({
                name: "Mr.",
                role: "QA",
                age: 30
            });
            expect(response.headers['content-type']).to.eq('application/json');
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.duration).to.be.lessThan(3000);



        });

    });

});
