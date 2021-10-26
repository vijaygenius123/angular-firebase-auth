# Angular With Firebase Auth

1. Create A New Angular Project With CLI ( With Routing)
   - If No Routing Use `ng generate module app-routing --flat --module=app`
2. Install `firebase` And `@angular/fire`
   - `npm i firebase @angular/fire`
3. Add Config From Firebase Console Into `src/environments/environments`
4. Initialize Firebase Config In `app.module.ts`

```ts
  imports: [
  BrowserModule,
  AppRoutingModule,
  RouterModule.forRoot(routes),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
]
```

5. Create A Service For Auth
`ng g s services/auth`
```ts

```
