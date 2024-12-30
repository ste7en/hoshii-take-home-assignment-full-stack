export const FeatureFlags = {
  features: {
    otherInboxes: import.meta.env.VITE_ENABLE_OTHER_INBOXES === 'true',
    search: import.meta.env.VITE_ENABLE_SEARCH === 'true',
    unreads: import.meta.env.VITE_ENABLE_UNREADS === 'true',
  },
}
