'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">futushop-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' : 'data-target="#xs-controllers-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' :
                                            'id="xs-controllers-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' : 'data-target="#xs-injectables-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' :
                                        'id="xs-injectables-links-module-AuthModule-50718ccd83b3eb3fd1488268849e781c9077983430a44f3866999acf97e6c9d3ed7fc60c83c61feaa0c8a1dd4444f4f3340cc636d5198110a6ca61dccc857f86"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookmarkModule.html" data-type="entity-link" >BookmarkModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GamedataModule.html" data-type="entity-link" >GamedataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' : 'data-target="#xs-controllers-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' :
                                            'id="xs-controllers-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' }>
                                            <li class="link">
                                                <a href="controllers/GameDataController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameDataController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' : 'data-target="#xs-injectables-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' :
                                        'id="xs-injectables-links-module-GamedataModule-2c5869783a30e523c1dc27173a9b5d9c749fe99e43829e0fdd056791f88cbe124415b53775658ec4f5fb0a03be978a7841747203c129b8b5654965162f4d5f9a"' }>
                                        <li class="link">
                                            <a href="injectables/gamedataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >gamedataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReviewsModule.html" data-type="entity-link" >ReviewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' : 'data-target="#xs-controllers-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' :
                                            'id="xs-controllers-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' }>
                                            <li class="link">
                                                <a href="controllers/ReviewsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' : 'data-target="#xs-injectables-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' :
                                        'id="xs-injectables-links-module-ReviewsModule-a98db3084ccd577b0a21cdfb40b58cf1b207859248e60ef59b2955ceeb6e7c5ed268bdc2c774cd657cf4e6371774ab6e23ed4c9fb6bfc0a30549a363e8ece561"' }>
                                        <li class="link">
                                            <a href="injectables/reviewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >reviewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' : 'data-target="#xs-controllers-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' :
                                            'id="xs-controllers-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' : 'data-target="#xs-injectables-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' :
                                        'id="xs-injectables-links-module-UserModule-d4b5bea71d7b7e77596d2051b78e391148a832f3ff7ab882230463c1124f19abf6c1d35bf30948701177613de724f79304fd24d7647b1afc61f495a737c0b715"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisitorcountModule.html" data-type="entity-link" >VisitorcountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' : 'data-target="#xs-controllers-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' :
                                            'id="xs-controllers-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' }>
                                            <li class="link">
                                                <a href="controllers/VisitorController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisitorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' : 'data-target="#xs-injectables-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' :
                                        'id="xs-injectables-links-module-VisitorcountModule-5a4c3f0286164ebd966592606673bdcfca851e76bc89f6bcd160f29a552f1cd064a630e1cff791845786ae79cbef0e51b76ed4a8a63c7c5e8272f0a19271a0b7"' }>
                                        <li class="link">
                                            <a href="injectables/visitorCountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >visitorCountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameDataController.html" data-type="entity-link" >GameDataController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReviewsController.html" data-type="entity-link" >ReviewsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VisitorController.html" data-type="entity-link" >VisitorController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthData.html" data-type="entity-link" >AuthData</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDto-1.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserDto.html" data-type="entity-link" >EditUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GameDataDto.html" data-type="entity-link" >GameDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetReviews.html" data-type="entity-link" >GetReviews</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetVisitors.html" data-type="entity-link" >GetVisitors</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/VisitorData.html" data-type="entity-link" >VisitorData</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/gamedataService.html" data-type="entity-link" >gamedataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/reviewsService.html" data-type="entity-link" >reviewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/visitorCountService.html" data-type="entity-link" >visitorCountService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});