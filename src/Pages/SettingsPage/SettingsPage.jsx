import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirnButton from './ConfirnButton';
import Page from '../../Shared/Page';

export default function SettingsPage() {
  return (
    <>
      <Page name="settings">
        <WelcomeMessage />
        <ConfirnButton />
      </Page>
    </>
  );
}
