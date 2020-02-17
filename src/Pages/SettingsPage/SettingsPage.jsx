import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirnButton from './ConfirnButton';
import Page from '../../Shared/Page';
import CoinGrid from './CoinGrid';

export default function SettingsPage() {
  return (
    <>
      <Page name="settings">
        <WelcomeMessage />
        <CoinGrid topSection />
        <ConfirnButton />
        <CoinGrid />
      </Page>
    </>
  );
}
