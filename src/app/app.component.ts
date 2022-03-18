import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// npm install swagger-ui-dist --save
// https://stackoverflow.com/questions/44894013/adding-swagger-ui-to-angular-app
// https://swagger.io/docs/open-source-tools/swagger-ui/usage/cors/

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public httpClient: HttpClient) {}

  title = 'swagger-ui-test-one';

  private url =
    'http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json';

  async ngOnInit(): Promise<void> {
    // simulate api call to get json object
    const res = await this.httpClient
      .get(this.url, { responseType: 'json' })
      .toPromise();

    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset,
      ],
      spec: res,
      // url: 'assets/swagger1.json',
      // url: 'http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json',
      docExpansion: 'none',
      operationsSorter: 'alpha',
    });
  }
}
