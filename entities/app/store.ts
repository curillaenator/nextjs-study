import { createEvent, createStore } from 'effector';
import type { AppStore } from './interfaces';

const toggleAside = createEvent<boolean | undefined>();

const $appStore = createStore<AppStore>({
  isAsideOpen: false,
});

$appStore.on(toggleAside, (prev, isOpen) => ({
  ...prev,
  isAsideOpen: isOpen !== undefined ? isOpen : !prev.isAsideOpen,
}));

export { $appStore, toggleAside };
