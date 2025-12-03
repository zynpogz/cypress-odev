// cypress/e2e/DERS-5/reqres_api.cy.js

describe('ReqRes API Testing', () => {
    const baseUrl = 'https://reqres.in';

    // TC01 - Basit GET isteği (liste)
    it('TC01 - GET /api/users?page=1 - Listeyi döndürmeli', () => {
        cy.request(`${baseUrl}/api/users?page=1`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('page', 1);
            expect(response.body.data).to.be.an('array').and.not.be.empty;
        });
    });

    // TC02 - GET single user (path param)
    it('TC02 - GET /api/users/2 - Kullanıcı detayını döndürmeli', () => {
        cy.request(`${baseUrl}/api/users/2`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('id', 2);
            expect(response.body.data.email).to.include('@reqres.in');
        });
    });

    // TC03 - GET non-existing user (404, failOnStatusCode:false)
    it('TC03 - GET /api/users/23 - 404 dönmeli', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/api/users/23`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    // TC04 - Dinamik query param (rastgele page)
    it('TC04 - GET /api/users?page={rastgele} - Query param doğru gelmeli', () => {
        const randomPage = Math.floor(Math.random() * 2) + 1; // 1 veya 2

        const rq = {
            method: 'GET',
            url: `${baseUrl}/api/users`,
            qs: { page: randomPage },
        };

        cy.request(rq).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.page).to.eq(randomPage);
        });
    });

    // TC05 - POST create user
    it('TC05 - POST /api/users - Kullanici oluşturmali', () => {
        const body = {
            name: 'Zeynep',
            job: 'QA Tester',
        };

        cy.request('POST', `${baseUrl}/api/users`, body).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', body.name);
            expect(response.body).to.have.property('job', body.job);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });

    // TC06 - PUT update user
    it('TC06 - PUT /api/users/2 - Kullanici bilgisi güncellenmeli', () => {
        const body = {
            name: 'Zeynep',
            job: 'QA Lead',
        };

        cy.request('PUT', `${baseUrl}/api/users/2`, body).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('job', body.job);
            expect(response.body).to.have.property('updatedAt');
        });
    });

    // TC07 - PATCH update user
    it('TC07 - PATCH /api/users/2 - Kullanicinin işi güncellenmeli', () => {
        const body = {
            job: 'Senior QA',
        };

        cy.request('PATCH', `${baseUrl}/api/users/2`, body).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('job', body.job);
            expect(response.body).to.have.property('updatedAt');
        });
    });

    // TC08 - DELETE user
    it('TC08 - DELETE /api/users/2 - 204 dönmeli', () => {
        cy.request('DELETE', `${baseUrl}/api/users/2`).then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty;
        });
    });

    // TC09 - Özel header gönderme ve doğrulama
    it('TC09 - GET /api/users ile custom header gönderilmeli', () => {
        const rq = {
            method: 'GET',
            url: `${baseUrl}/api/users?page=2`,
            headers: {
                'X-Custom-Header': 'test-header',
            },
        };

        cy.request(rq).then((response) => {
            expect(response.status).to.eq(200);
            // İstek ile giden header'ları Cypress response.requestHeaders içinde tutar
            expect(response.requestHeaders).to.have.property(
                'x-custom-header',
                'test-header'
            );
            // Standart header örneği
            expect(response.requestHeaders).to.have.property('user-agent');
        });
    });

    // TC10 - Response time ölçme
    it('TC10 - GET /api/users?page=1 - Response süresi 5000ms altında olmalı', () => {
        cy.request(`${baseUrl}/api/users?page=1`).then((response) => {
            // duration ms cinsinden
            expect(response.duration).to.be.a('number');
            expect(response.duration).to.be.lessThan(5000); // 5 saniyeden kısa olmalı
            cy.log('Response time (ms): ', response.duration);
        });
    });
});
