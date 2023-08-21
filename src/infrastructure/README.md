# Infrastructure/Services

- contains interface adapters
- others call it service
  - <https://github.com/bespoyasov/frontend-clean-architecture/tree/master/src>

## Interface Adapters

- Code found here is a set of adapters that convert data in Entity format to format that matches an external dependency for example Database
- This might have for example the MVC Architecture of a GUI
  - View layer responsible for rendering the UI
  - Controllers layer for routes and defining logic for those routes
  - Model layer responsible for communicating with the database