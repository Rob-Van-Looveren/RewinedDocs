var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","component":"LoginComponent"},{"path":"newProcess","component":"ProcesOpstartComponent","canActivate":["AuthAdminGuard"]},{"path":"dashboard/:VatID","component":"DashboardComponent","resolve":{"barrelData":"DashboardResolver"},"canActivate":["AuthGuard"]},{"path":"usersBeheren","component":"UsersBeherenComponent","canActivate":["AuthAdminGuard"]},{"path":"processOverview","component":"ProcessOverviewComponent","resolve":{"tanks":"ProcessOverviewResolver"},"canActivate":["AuthAdminGuard"]}],"kind":"module"}]}