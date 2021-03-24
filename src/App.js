import './App.css';
import '@shopify/polaris/dist/styles.css';
import {
  Page,
  Card,
  Button,
  AppProvider
} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Find Shop">
        <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Polaris Button</Button>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
