describe("API testing", () => {

    it("tc01_GET isteği", () => {
        const rq = {
            method: "GET",
            url: "https://httpbingo.org/get",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.eq(200);
            console.log("response ::: ", response);
        });
    });

    it("tc02_GET isteği", () => {
        const rq = {
            method: "GET",
            url: "https://httpbingo.org/get",
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.eq(200);
        });
    });

    it("tc03_GET isteği", () => {
        const rq = {
            method: "GET",
            url: "https://httpbingo.org/get",
            qs: {
                id: "1",
                name: "Zeynep"
            },
            failOnStatusCode: false
        };

        cy.request(rq).then((response) => {
            assert.equal(response.status, 200);
            expect(response.status).to.eq(200);
            it("tc04_GET istegi body", () => {
                const rq = {
                    method: 'POST',
                    url: "https://httpbin.org/post",
                    body: {
                        name: "Mr.",
                        role: "QA",
                        age: 30
                    },
                };
            });

            // post with body :::::::::2
            it("tc05_POST istegi body_2", () => {

                const body = {
                    name: "Mr.",
                    role: "QA",
                    age: 30
                };

                const rq = {
                    method: 'POST',
                    url: "https://httpbin.org/post",
                    body: body,
                    failOnStatusCode: false
                };

            });
            // post with body with headers :::::::::2
            it("tc06_POST istegi body_2 with headers", () => {

                const body = {
                    name: "Mr.",
                    role: "QA",
                    age: 30
                };

                const rq = {
                    method: 'POST',
                    url: "https://httpbin.org/post",
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
                    },
                    failOnStatusCode: false
                };

            });

            cy.log("response body ::::: ", JSON.stringify(response.body));
            cy.log("response headers ::::: ", JSON.stringify(response.headers));
            cy.log("response status ::::: ", response.status);
            cy.log("response statusText ::::: ", response.statusText);
            cy.log("response duration ::::: ", response.duration);
        });
    });

});
