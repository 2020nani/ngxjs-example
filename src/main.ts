import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)  // Agora, o AppModule cuida de todas as importações e configurações
  .catch(err => console.error(err));
