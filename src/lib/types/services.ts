import type { AccessService } from '../services/access-service';
import type AddonService from '../services/addon-service';
import type ProjectService from '../features/project/project-service';
import type StrategyService from '../services/strategy-service';
import type TagTypeService from '../features/tag-type/tag-type-service';
import type TagService from '../services/tag-service';
import type ClientInstanceService from '../features/metrics/instance/instance-service';
import type ContextService from '../services/context-service';
import type VersionService from '../services/version-service';
import type { ApiTokenService } from '../services/api-token-service';
import type { EmailService } from '../services/email-service';
import type UserService from '../services/user-service';
import type ResetTokenService from '../services/reset-token-service';
import type FeatureTypeService from '../services/feature-type-service';
import type EventService from '../features/events/event-service';
import type HealthService from '../services/health-service';
import type SettingService from '../services/setting-service';
import type SessionService from '../services/session-service';
import type UserFeedbackService from '../services/user-feedback-service';
import type FeatureToggleService from '../features/feature-toggle/feature-toggle-service';
import type EnvironmentService from '../features/project-environments/environment-service';
import type FeatureTagService from '../services/feature-tag-service';
import type ProjectHealthService from '../services/project-health-service';
import type ClientMetricsServiceV2 from '../features/metrics/client-metrics/metrics-service-v2';
import type UserSplashService from '../services/user-splash-service';
import type { OpenApiService } from '../services/openapi-service';
import type { ClientSpecService } from '../services/client-spec-service';
import type { PlaygroundService } from '../features/playground/playground-service';
import type { GroupService } from '../services/group-service';
import type { FrontendApiService } from '../features/frontend-api/frontend-api-service';
import type EdgeService from '../services/edge-service';
import type PatService from '../services/pat-service';
import type { PublicSignupTokenService } from '../services/public-signup-token-service';
import type { LastSeenService } from '../features/metrics/last-seen/last-seen-service';
import type { InstanceStatsService } from '../features/instance-stats/instance-stats-service';
import type { FavoritesService } from '../services/favorites-service';
import type MaintenanceService from '../features/maintenance/maintenance-service';
import type { AccountService } from '../services/account-service';
import type { SchedulerService } from '../features/scheduler/scheduler-service';
import type { Knex } from 'knex';
import type {
    IExportService,
    IImportService,
} from '../features/export-import-toggles/export-import-service';
import type { ISegmentService } from '../features/segment/segment-service-interface';
import type ConfigurationRevisionService from '../features/feature-toggle/configuration-revision-service';
import type EventAnnouncerService from '../services/event-announcer-service';
import type { IPrivateProjectChecker } from '../features/private-project/privateProjectCheckerType';
import type { DependentFeaturesService } from '../features/dependent-features/dependent-features-service';
import type { WithTransactional } from '../db/transaction';
import type { ClientFeatureToggleService } from '../features/client-feature-toggles/client-feature-toggle-service';
import type { FeatureSearchService } from '../features/feature-search/feature-search-service';
import type { InactiveUsersService } from '../users/inactive/inactive-users-service';
import type { ProjectInsightsService } from '../features/project-insights/project-insights-service';
import type { JobService } from '../features/scheduler/job-service';
import type { FeatureLifecycleService } from '../features/feature-lifecycle/feature-lifecycle-service';
import type { IntegrationEventsService } from '../features/integration-events/integration-events-service';

export interface IUnleashServices {
    accessService: AccessService;
    accountService: AccountService;
    addonService: AddonService;
    apiTokenService: ApiTokenService;
    clientInstanceService: ClientInstanceService;
    clientMetricsServiceV2: ClientMetricsServiceV2;
    contextService: ContextService;
    emailService: EmailService;
    environmentService: EnvironmentService;
    transactionalEnvironmentService: WithTransactional<EnvironmentService>;
    eventService: EventService;
    edgeService: EdgeService;
    featureTagService: FeatureTagService;
    featureToggleService: FeatureToggleService;
    /** @deprecated use featureToggleService instead, both are interchangeable */
    featureToggleServiceV2: FeatureToggleService;
    featureTypeService: FeatureTypeService;
    groupService: GroupService;
    healthService: HealthService;
    projectHealthService: ProjectHealthService;
    projectService: ProjectService;
    playgroundService: PlaygroundService;
    frontendApiService: FrontendApiService;
    publicSignupTokenService: PublicSignupTokenService;
    resetTokenService: ResetTokenService;
    sessionService: SessionService;
    settingService: SettingService;
    strategyService: StrategyService;
    tagService: TagService;
    tagTypeService: TagTypeService;
    transactionalTagTypeService: WithTransactional<TagTypeService>;
    userFeedbackService: UserFeedbackService;
    userService: UserService;
    versionService: VersionService;
    userSplashService: UserSplashService;
    segmentService: ISegmentService;
    openApiService: OpenApiService;
    clientSpecService: ClientSpecService;
    patService: PatService;
    lastSeenService: LastSeenService;
    instanceStatsService: InstanceStatsService;
    favoritesService: FavoritesService;
    maintenanceService: MaintenanceService;
    exportService: IExportService;
    importService: WithTransactional<IImportService>;
    configurationRevisionService: ConfigurationRevisionService;
    schedulerService: SchedulerService;
    eventAnnouncerService: EventAnnouncerService;
    transactionalFeatureToggleService: (
        db: Knex.Transaction,
    ) => FeatureToggleService;
    transactionalGroupService: (db: Knex.Transaction) => GroupService;
    privateProjectChecker: IPrivateProjectChecker;
    dependentFeaturesService: DependentFeaturesService;
    transactionalDependentFeaturesService: WithTransactional<DependentFeaturesService>;
    clientFeatureToggleService: ClientFeatureToggleService;
    featureSearchService: FeatureSearchService;
    inactiveUsersService: InactiveUsersService;
    projectInsightsService: ProjectInsightsService;
    jobService: JobService;
    featureLifecycleService: FeatureLifecycleService;
    transactionalFeatureLifecycleService: WithTransactional<FeatureLifecycleService>;
    integrationEventsService: IntegrationEventsService;
}
