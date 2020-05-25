# GoBarber

---
### Mapping features
#### Forgot password
**RF**
- [ ] The user should be able to recovery his password providing his email address;
- [ ] The user should be able to receive an email with instructions to recovery his password;
- [ ] The user should be able to reset his password;

**RNF**
- [ ] Use [Mailtrap](https://mailtrap.io/) to test mail in development environment;
- [ ] Use Amazon SES to mail in production environment;
- [ ] The mail must happens on background (background jobs);

**RN**
- [ ] The link sent by email to recovery password should expires in 2 hours;
- [ ] The user must confirm his new password;

#### Profile update
**RF**
- [ ] The user should be able to update his profile (name, email and password);

**RN**
- [ ] The user should not be able to edit his email address to an already used email address;
- [ ] The user must provide his old password to update his password;
- [ ] The user must confirm his new password to update his current password;

#### Provider panel
**RF**
- [ ] The user should be able to list all his appointments for a given day;
- [ ] The provider must receive a notification always when someone schedule with him;
- [ ] The provider should be able to see all non read notifications;

**RNF**
- [ ] The appointments for a given day must be cached;
- [ ] The provider's notification must be storaged on MongoDB;
- [ ] The provider's notification must be send in real-time with socket.io;

**RN**
- [ ] The notification must have a status like read or pending for the provider can manage it;

#### Appointment schedule
**RF**
- [ ] The user should be able to list all registered providers;
- [ ] The user should be able to view all the days of a month with at least one available interval for a given provider;
- [ ] The user should be able to list all available intervals for a given specific day for a given provider;
- [ ] The user should be able to make a new schedule with a provider;

**RNF**
- [ ] The providers index must be cached;

**RN**
- [ ] Each schedule must have 1 hour of duration;
- [ ] The schedules should be available between 8am and 6pm (the first schedule at 8am and the last one at 5pm);
- [ ] The user can not schedule on an already scheduled interval;
- [ ] The user can not schedule on a past interval;
- [ ] The user can not schedule self services;

---
### Principles, concerns and patterns
- Services;
- Repositories;
- Don't Repeat Yourself;
- Data Transfer Object;
- Dependency Invertion Principle;
- Single Responsability Principle;
- Keep It Simple & Stupid;
- DDD;
- Liskov Substitution Principle;
- Dependency Injection;
- Singleton;
- Controllers;
- TDD;
- Unit tests;
- Integration tests;
