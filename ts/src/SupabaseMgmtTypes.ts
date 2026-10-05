// Typed models for the SupabaseMgmt SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Action {
  branch_id: string
  check_run_id: number
  created_at: string
  git_config?: any
  id: string
  run_steps: any[]
  updated_at: string
  workdir: string
}

export interface ActionLoadMatch {
  id: string
  project_id: string
}

export interface ActionUpdateData {
  id: string
  project_id: string
  branch_id?: string
  check_run_id?: number
  created_at?: string
  git_config?: any
  run_steps?: any[]
  updated_at?: string
  workdir?: string

  // Selects a custom action instead of the plain update:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Activate {
  vanity_subdomain: string
}

export interface ActivateCreateData {
  project_id: string
  vanity_subdomain: string
}

export interface Analytics {
}

export interface AnalyticsLoadMatch {
  project_id: string
}

export interface ApiKey {
  api_key?: string
  description?: string
  hash?: string
  id?: string
  inserted_at?: string
  name: string
  prefix?: string
  secret_jwt_template?: Record<string, any>
  type?: string
  updated_at?: string
}

export interface ApiKeyLoadMatch {
  id: string
  project_id: string
  reveal?: string
}

export interface ApiKeyListMatch {
  ref: string
  reveal?: string
}

export interface ApiKeyCreateData {
  ref: string
  reveal?: string
  api_key?: string
  description?: string
  hash?: string
  id?: string
  inserted_at?: string
  name: string
  prefix?: string
  secret_jwt_template?: Record<string, any>
  type?: string
  updated_at?: string
}

export interface ApiKeyUpdateData {
  id: string
  project_id: string
  reveal?: string
  api_key?: string
  description?: string
  hash?: string
  inserted_at?: string
  name?: string
  prefix?: string
  secret_jwt_template?: Record<string, any>
  type?: string
  updated_at?: string
}

export interface ApiKeyRemoveMatch {
  id: string
  project_id: string
  reason?: string
  reveal?: string
  was_compromised?: string
}

export interface Auth {
  api_max_request_duration: number
  custom_oauth_enabled: boolean
  custom_oauth_max_providers: number
  db_max_pool_size: number
  db_max_pool_size_unit: string
  disable_signup: boolean
  external_anonymous_users_enabled: boolean
  external_apple_additional_client_ids: string
  external_apple_client_id: string
  external_apple_email_optional: boolean
  external_apple_enabled: boolean
  external_apple_secret: string
  external_azure_client_id: string
  external_azure_email_optional: boolean
  external_azure_enabled: boolean
  external_azure_secret: string
  external_azure_url: string
  external_bitbucket_client_id: string
  external_bitbucket_email_optional: boolean
  external_bitbucket_enabled: boolean
  external_bitbucket_secret: string
  external_discord_client_id: string
  external_discord_email_optional: boolean
  external_discord_enabled: boolean
  external_discord_secret: string
  external_email_enabled: boolean
  external_facebook_client_id: string
  external_facebook_email_optional: boolean
  external_facebook_enabled: boolean
  external_facebook_secret: string
  external_figma_client_id: string
  external_figma_email_optional: boolean
  external_figma_enabled: boolean
  external_figma_secret: string
  external_github_client_id: string
  external_github_email_optional: boolean
  external_github_enabled: boolean
  external_github_secret: string
  external_gitlab_client_id: string
  external_gitlab_email_optional: boolean
  external_gitlab_enabled: boolean
  external_gitlab_secret: string
  external_gitlab_url: string
  external_google_additional_client_ids: string
  external_google_client_id: string
  external_google_email_optional: boolean
  external_google_enabled: boolean
  external_google_secret: string
  external_google_skip_nonce_check: boolean
  external_kakao_client_id: string
  external_kakao_email_optional: boolean
  external_kakao_enabled: boolean
  external_kakao_secret: string
  external_keycloak_client_id: string
  external_keycloak_email_optional: boolean
  external_keycloak_enabled: boolean
  external_keycloak_secret: string
  external_keycloak_url: string
  external_linkedin_oidc_client_id: string
  external_linkedin_oidc_email_optional: boolean
  external_linkedin_oidc_enabled: boolean
  external_linkedin_oidc_secret: string
  external_notion_client_id: string
  external_notion_email_optional: boolean
  external_notion_enabled: boolean
  external_notion_secret: string
  external_phone_enabled: boolean
  external_slack_client_id: string
  external_slack_email_optional: boolean
  external_slack_enabled: boolean
  external_slack_oidc_client_id: string
  external_slack_oidc_email_optional: boolean
  external_slack_oidc_enabled: boolean
  external_slack_oidc_secret: string
  external_slack_secret: string
  external_spotify_client_id: string
  external_spotify_email_optional: boolean
  external_spotify_enabled: boolean
  external_spotify_secret: string
  external_twitch_client_id: string
  external_twitch_email_optional: boolean
  external_twitch_enabled: boolean
  external_twitch_secret: string
  external_twitter_client_id: string
  external_twitter_email_optional: boolean
  external_twitter_enabled: boolean
  external_twitter_secret: string
  external_web3_ethereum_enabled: boolean
  external_web3_solana_enabled: boolean
  external_workos_client_id: string
  external_workos_enabled: boolean
  external_workos_secret: string
  external_workos_url: string
  external_x_client_id: string
  external_x_email_optional: boolean
  external_x_enabled: boolean
  external_x_secret: string
  external_zoom_client_id: string
  external_zoom_email_optional: boolean
  external_zoom_enabled: boolean
  external_zoom_secret: string
  hook_after_user_created_enabled: boolean
  hook_after_user_created_secrets: string
  hook_after_user_created_uri: string
  hook_before_user_created_enabled: boolean
  hook_before_user_created_secrets: string
  hook_before_user_created_uri: string
  hook_custom_access_token_enabled: boolean
  hook_custom_access_token_secrets: string
  hook_custom_access_token_uri: string
  hook_mfa_verification_attempt_enabled: boolean
  hook_mfa_verification_attempt_secrets: string
  hook_mfa_verification_attempt_uri: string
  hook_password_verification_attempt_enabled: boolean
  hook_password_verification_attempt_secrets: string
  hook_password_verification_attempt_uri: string
  hook_send_email_enabled: boolean
  hook_send_email_secrets: string
  hook_send_email_uri: string
  hook_send_sms_enabled: boolean
  hook_send_sms_secrets: string
  hook_send_sms_uri: string
  jwt_exp: number
  mailer_allow_unverified_email_sign_ins: boolean
  mailer_autoconfirm: boolean
  mailer_notifications_email_changed_enabled: boolean
  mailer_notifications_identity_linked_enabled: boolean
  mailer_notifications_identity_unlinked_enabled: boolean
  mailer_notifications_mfa_factor_enrolled_enabled: boolean
  mailer_notifications_mfa_factor_unenrolled_enabled: boolean
  mailer_notifications_password_changed_enabled: boolean
  mailer_notifications_phone_changed_enabled: boolean
  mailer_otp_exp: number
  mailer_otp_length: number
  mailer_secure_email_change_enabled: boolean
  mailer_subjects_confirmation: string
  mailer_subjects_email_change: string
  mailer_subjects_email_changed_notification: string
  mailer_subjects_identity_linked_notification: string
  mailer_subjects_identity_unlinked_notification: string
  mailer_subjects_invite: string
  mailer_subjects_magic_link: string
  mailer_subjects_mfa_factor_enrolled_notification: string
  mailer_subjects_mfa_factor_unenrolled_notification: string
  mailer_subjects_password_changed_notification: string
  mailer_subjects_phone_changed_notification: string
  mailer_subjects_reauthentication: string
  mailer_subjects_recovery: string
  mailer_templates_confirmation_content: string
  mailer_templates_email_change_content: string
  mailer_templates_email_changed_notification_content: string
  mailer_templates_identity_linked_notification_content: string
  mailer_templates_identity_unlinked_notification_content: string
  mailer_templates_invite_content: string
  mailer_templates_magic_link_content: string
  mailer_templates_mfa_factor_enrolled_notification_content: string
  mailer_templates_mfa_factor_unenrolled_notification_content: string
  mailer_templates_password_changed_notification_content: string
  mailer_templates_phone_changed_notification_content: string
  mailer_templates_reauthentication_content: string
  mailer_templates_recovery_content: string
  mfa_max_enrolled_factors: number
  mfa_phone_enroll_enabled: boolean
  mfa_phone_max_frequency: number
  mfa_phone_otp_length: number
  mfa_phone_template: string
  mfa_phone_verify_enabled: boolean
  mfa_totp_enroll_enabled: boolean
  mfa_totp_verify_enabled: boolean
  mfa_web_authn_enroll_enabled: boolean
  mfa_web_authn_verify_enabled: boolean
  nimbus_oauth_client_id: string
  nimbus_oauth_client_secret: string
  nimbus_oauth_email_optional: boolean
  oauth_server_allow_dynamic_registration: boolean
  oauth_server_authorization_path: string
  oauth_server_enabled: boolean
  passkey_enabled: boolean
  password_hibp_enabled: boolean
  password_min_length: number
  password_required_characters: string
  rate_limit_anonymous_users: number
  rate_limit_email_sent: number
  rate_limit_otp: number
  rate_limit_sms_sent: number
  rate_limit_token_refresh: number
  rate_limit_verify: number
  rate_limit_web3: number
  refresh_token_rotation_enabled: boolean
  saml_allow_encrypted_assertions: boolean
  saml_enabled: boolean
  saml_external_url: string
  security_captcha_enabled: boolean
  security_captcha_provider: string
  security_captcha_secret: string
  security_manual_linking_enabled: boolean
  security_refresh_token_reuse_interval: number
  security_sb_forwarded_for_enabled: boolean
  security_update_password_require_current_password: boolean
  security_update_password_require_reauthentication: boolean
  sessions_inactivity_timeout: number
  sessions_single_per_user: boolean
  sessions_tags: string
  sessions_timebox: number
  site_url: string
  sms_autoconfirm: boolean
  sms_max_frequency: number
  sms_messagebird_access_key: string
  sms_messagebird_originator: string
  sms_otp_exp: number
  sms_otp_length: number
  sms_provider: string
  sms_template: string
  sms_test_otp: string
  sms_test_otp_valid_until: string
  sms_textlocal_api_key: string
  sms_textlocal_sender: string
  sms_twilio_account_sid: string
  sms_twilio_auth_token: string
  sms_twilio_content_sid: string
  sms_twilio_message_service_sid: string
  sms_twilio_verify_account_sid: string
  sms_twilio_verify_auth_token: string
  sms_twilio_verify_message_service_sid: string
  sms_vonage_api_key: string
  sms_vonage_api_secret: string
  sms_vonage_from: string
  smtp_admin_email: string
  smtp_host: string
  smtp_max_frequency: number
  smtp_pass: string
  smtp_port: string
  smtp_sender_name: string
  smtp_user: string
  uri_allow_list: string
  webauthn_rp_display_name: string
  webauthn_rp_id: string
  webauthn_rp_origins: string
}

export interface AuthLoadMatch {
  project_id: string
}

export interface AuthUpdateData {
  project_id: string
  api_max_request_duration?: number
  custom_oauth_enabled?: boolean
  custom_oauth_max_providers?: number
  db_max_pool_size?: number
  db_max_pool_size_unit?: string
  disable_signup?: boolean
  external_anonymous_users_enabled?: boolean
  external_apple_additional_client_ids?: string
  external_apple_client_id?: string
  external_apple_email_optional?: boolean
  external_apple_enabled?: boolean
  external_apple_secret?: string
  external_azure_client_id?: string
  external_azure_email_optional?: boolean
  external_azure_enabled?: boolean
  external_azure_secret?: string
  external_azure_url?: string
  external_bitbucket_client_id?: string
  external_bitbucket_email_optional?: boolean
  external_bitbucket_enabled?: boolean
  external_bitbucket_secret?: string
  external_discord_client_id?: string
  external_discord_email_optional?: boolean
  external_discord_enabled?: boolean
  external_discord_secret?: string
  external_email_enabled?: boolean
  external_facebook_client_id?: string
  external_facebook_email_optional?: boolean
  external_facebook_enabled?: boolean
  external_facebook_secret?: string
  external_figma_client_id?: string
  external_figma_email_optional?: boolean
  external_figma_enabled?: boolean
  external_figma_secret?: string
  external_github_client_id?: string
  external_github_email_optional?: boolean
  external_github_enabled?: boolean
  external_github_secret?: string
  external_gitlab_client_id?: string
  external_gitlab_email_optional?: boolean
  external_gitlab_enabled?: boolean
  external_gitlab_secret?: string
  external_gitlab_url?: string
  external_google_additional_client_ids?: string
  external_google_client_id?: string
  external_google_email_optional?: boolean
  external_google_enabled?: boolean
  external_google_secret?: string
  external_google_skip_nonce_check?: boolean
  external_kakao_client_id?: string
  external_kakao_email_optional?: boolean
  external_kakao_enabled?: boolean
  external_kakao_secret?: string
  external_keycloak_client_id?: string
  external_keycloak_email_optional?: boolean
  external_keycloak_enabled?: boolean
  external_keycloak_secret?: string
  external_keycloak_url?: string
  external_linkedin_oidc_client_id?: string
  external_linkedin_oidc_email_optional?: boolean
  external_linkedin_oidc_enabled?: boolean
  external_linkedin_oidc_secret?: string
  external_notion_client_id?: string
  external_notion_email_optional?: boolean
  external_notion_enabled?: boolean
  external_notion_secret?: string
  external_phone_enabled?: boolean
  external_slack_client_id?: string
  external_slack_email_optional?: boolean
  external_slack_enabled?: boolean
  external_slack_oidc_client_id?: string
  external_slack_oidc_email_optional?: boolean
  external_slack_oidc_enabled?: boolean
  external_slack_oidc_secret?: string
  external_slack_secret?: string
  external_spotify_client_id?: string
  external_spotify_email_optional?: boolean
  external_spotify_enabled?: boolean
  external_spotify_secret?: string
  external_twitch_client_id?: string
  external_twitch_email_optional?: boolean
  external_twitch_enabled?: boolean
  external_twitch_secret?: string
  external_twitter_client_id?: string
  external_twitter_email_optional?: boolean
  external_twitter_enabled?: boolean
  external_twitter_secret?: string
  external_web3_ethereum_enabled?: boolean
  external_web3_solana_enabled?: boolean
  external_workos_client_id?: string
  external_workos_enabled?: boolean
  external_workos_secret?: string
  external_workos_url?: string
  external_x_client_id?: string
  external_x_email_optional?: boolean
  external_x_enabled?: boolean
  external_x_secret?: string
  external_zoom_client_id?: string
  external_zoom_email_optional?: boolean
  external_zoom_enabled?: boolean
  external_zoom_secret?: string
  hook_after_user_created_enabled?: boolean
  hook_after_user_created_secrets?: string
  hook_after_user_created_uri?: string
  hook_before_user_created_enabled?: boolean
  hook_before_user_created_secrets?: string
  hook_before_user_created_uri?: string
  hook_custom_access_token_enabled?: boolean
  hook_custom_access_token_secrets?: string
  hook_custom_access_token_uri?: string
  hook_mfa_verification_attempt_enabled?: boolean
  hook_mfa_verification_attempt_secrets?: string
  hook_mfa_verification_attempt_uri?: string
  hook_password_verification_attempt_enabled?: boolean
  hook_password_verification_attempt_secrets?: string
  hook_password_verification_attempt_uri?: string
  hook_send_email_enabled?: boolean
  hook_send_email_secrets?: string
  hook_send_email_uri?: string
  hook_send_sms_enabled?: boolean
  hook_send_sms_secrets?: string
  hook_send_sms_uri?: string
  jwt_exp?: number
  mailer_allow_unverified_email_sign_ins?: boolean
  mailer_autoconfirm?: boolean
  mailer_notifications_email_changed_enabled?: boolean
  mailer_notifications_identity_linked_enabled?: boolean
  mailer_notifications_identity_unlinked_enabled?: boolean
  mailer_notifications_mfa_factor_enrolled_enabled?: boolean
  mailer_notifications_mfa_factor_unenrolled_enabled?: boolean
  mailer_notifications_password_changed_enabled?: boolean
  mailer_notifications_phone_changed_enabled?: boolean
  mailer_otp_exp?: number
  mailer_otp_length?: number
  mailer_secure_email_change_enabled?: boolean
  mailer_subjects_confirmation?: string
  mailer_subjects_email_change?: string
  mailer_subjects_email_changed_notification?: string
  mailer_subjects_identity_linked_notification?: string
  mailer_subjects_identity_unlinked_notification?: string
  mailer_subjects_invite?: string
  mailer_subjects_magic_link?: string
  mailer_subjects_mfa_factor_enrolled_notification?: string
  mailer_subjects_mfa_factor_unenrolled_notification?: string
  mailer_subjects_password_changed_notification?: string
  mailer_subjects_phone_changed_notification?: string
  mailer_subjects_reauthentication?: string
  mailer_subjects_recovery?: string
  mailer_templates_confirmation_content?: string
  mailer_templates_email_change_content?: string
  mailer_templates_email_changed_notification_content?: string
  mailer_templates_identity_linked_notification_content?: string
  mailer_templates_identity_unlinked_notification_content?: string
  mailer_templates_invite_content?: string
  mailer_templates_magic_link_content?: string
  mailer_templates_mfa_factor_enrolled_notification_content?: string
  mailer_templates_mfa_factor_unenrolled_notification_content?: string
  mailer_templates_password_changed_notification_content?: string
  mailer_templates_phone_changed_notification_content?: string
  mailer_templates_reauthentication_content?: string
  mailer_templates_recovery_content?: string
  mfa_max_enrolled_factors?: number
  mfa_phone_enroll_enabled?: boolean
  mfa_phone_max_frequency?: number
  mfa_phone_otp_length?: number
  mfa_phone_template?: string
  mfa_phone_verify_enabled?: boolean
  mfa_totp_enroll_enabled?: boolean
  mfa_totp_verify_enabled?: boolean
  mfa_web_authn_enroll_enabled?: boolean
  mfa_web_authn_verify_enabled?: boolean
  nimbus_oauth_client_id?: string
  nimbus_oauth_client_secret?: string
  nimbus_oauth_email_optional?: boolean
  oauth_server_allow_dynamic_registration?: boolean
  oauth_server_authorization_path?: string
  oauth_server_enabled?: boolean
  passkey_enabled?: boolean
  password_hibp_enabled?: boolean
  password_min_length?: number
  password_required_characters?: string
  rate_limit_anonymous_users?: number
  rate_limit_email_sent?: number
  rate_limit_otp?: number
  rate_limit_sms_sent?: number
  rate_limit_token_refresh?: number
  rate_limit_verify?: number
  rate_limit_web3?: number
  refresh_token_rotation_enabled?: boolean
  saml_allow_encrypted_assertions?: boolean
  saml_enabled?: boolean
  saml_external_url?: string
  security_captcha_enabled?: boolean
  security_captcha_provider?: string
  security_captcha_secret?: string
  security_manual_linking_enabled?: boolean
  security_refresh_token_reuse_interval?: number
  security_sb_forwarded_for_enabled?: boolean
  security_update_password_require_current_password?: boolean
  security_update_password_require_reauthentication?: boolean
  sessions_inactivity_timeout?: number
  sessions_single_per_user?: boolean
  sessions_tags?: string
  sessions_timebox?: number
  site_url?: string
  sms_autoconfirm?: boolean
  sms_max_frequency?: number
  sms_messagebird_access_key?: string
  sms_messagebird_originator?: string
  sms_otp_exp?: number
  sms_otp_length?: number
  sms_provider?: string
  sms_template?: string
  sms_test_otp?: string
  sms_test_otp_valid_until?: string
  sms_textlocal_api_key?: string
  sms_textlocal_sender?: string
  sms_twilio_account_sid?: string
  sms_twilio_auth_token?: string
  sms_twilio_content_sid?: string
  sms_twilio_message_service_sid?: string
  sms_twilio_verify_account_sid?: string
  sms_twilio_verify_auth_token?: string
  sms_twilio_verify_message_service_sid?: string
  sms_vonage_api_key?: string
  sms_vonage_api_secret?: string
  sms_vonage_from?: string
  smtp_admin_email?: string
  smtp_host?: string
  smtp_max_frequency?: number
  smtp_pass?: string
  smtp_port?: string
  smtp_sender_name?: string
  smtp_user?: string
  uri_allow_list?: string
  webauthn_rp_display_name?: string
  webauthn_rp_id?: string
  webauthn_rp_origins?: string
}

export interface Billing {
}

export interface BillingUpdateData {
  project_id: string

  // Selects a custom action instead of the plain update:
  //   'addon'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BillingRemoveMatch {
  addon_variant: any
  project_id: string
}

export interface Branch {
  branch_name: string
  created_at: string
  db_host: string
  db_pass?: string
  db_port: number
  db_user?: string
  deletion_scheduled_at?: string
  desired_instance_size?: string
  git_branch?: string
  id: string
  is_default: boolean
  jwt_secret?: string
  latest_check_run_id?: number
  name: string
  notify_url?: string
  parent_project_ref: string
  persistent: boolean
  postgres_engine: string
  postgres_version: string
  pr_number?: number
  preview_project_status?: string
  project_ref: string
  ref: string
  region?: string
  release_channel: string
  request_review?: boolean
  reset_on_push?: boolean
  review_requested_at?: string
  secrets?: Record<string, any>
  status: string
  updated_at: string
  with_data: boolean
}

export interface BranchLoadMatch {
  id: string
  project_id?: string
}

export interface BranchListMatch {
  ref: string
}

export interface BranchCreateData {
  ref: string
  branch_name: string
  created_at: string
  db_host: string
  db_pass?: string
  db_port: number
  db_user?: string
  deletion_scheduled_at?: string
  desired_instance_size?: string
  git_branch?: string
  id: string
  is_default: boolean
  jwt_secret?: string
  latest_check_run_id?: number
  name: string
  notify_url?: string
  parent_project_ref: string
  persistent: boolean
  postgres_engine: string
  postgres_version: string
  pr_number?: number
  preview_project_status?: string
  project_ref: string
  region?: string
  release_channel: string
  request_review?: boolean
  reset_on_push?: boolean
  review_requested_at?: string
  secrets?: Record<string, any>
  status: string
  updated_at: string
  with_data: boolean

  // Selects a custom action instead of the plain create:
  //   'restore'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BranchUpdateData {
  id: string
  branch_name?: string
  created_at?: string
  db_host?: string
  db_pass?: string
  db_port?: number
  db_user?: string
  deletion_scheduled_at?: string
  desired_instance_size?: string
  git_branch?: string
  is_default?: boolean
  jwt_secret?: string
  latest_check_run_id?: number
  name?: string
  notify_url?: string
  parent_project_ref?: string
  persistent?: boolean
  postgres_engine?: string
  postgres_version?: string
  pr_number?: number
  preview_project_status?: string
  project_ref?: string
  ref?: string
  region?: string
  release_channel?: string
  request_review?: boolean
  reset_on_push?: boolean
  review_requested_at?: string
  secrets?: Record<string, any>
  status?: string
  updated_at?: string
  with_data?: boolean
}

export interface BranchRemoveMatch {
  id: string
  force?: string
}

export interface BranchUpdateResponseOutput {
  migration_version?: string
}

export interface BranchUpdateResponseOutputCreateData {
  branch_id_or_ref: any
  migration_version?: string
}

export interface BulkUpdateFunctionResponseOutput {
  functions: any[]
}

export interface BulkUpdateFunctionResponseOutputUpdateData {
  ref: string
  functions?: any[]
}

export interface CreateProviderResponseOutput {
  attribute_mapping: Record<string, any>
  domains?: any[]
  metadata_url?: string
  metadata_xml?: string
  name_id_format?: string
  type: string
}

export interface CreateProviderResponseOutputCreateData {
  project_id: string
  attribute_mapping: Record<string, any>
  domains?: any[]
  metadata_url?: string
  metadata_xml?: string
  name_id_format?: string
  type: string
}

export interface CreateRoleResponseOutput {
  read_only: boolean
}

export interface CreateRoleResponseOutputCreateData {
  project_id: string
  read_only: boolean
}

export interface Database {
  database_identifier: string
  id: number
  name: string
  parameters?: any[]
  query: string
  read_replica_region: string
  recovery_time_target_unix: number
  rollback?: string
}

export interface DatabaseLoadMatch {
  ref: string

  // Selects a custom action instead of the plain load:
  //   'openapi'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseListMatch {
  project_id: string

  // Selects a custom action instead of the plain list:
  //   'context'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseCreateData {
  project_id: string
  database_identifier: string
  id: number
  name: string
  parameters?: any[]
  query: string
  read_replica_region: string
  recovery_time_target_unix: number
  rollback?: string

  // Selects a custom action instead of the plain create:
  //   'migration' | 'query'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseUpdateData {
  project_id: string
  version: string
  database_identifier?: string
  id?: number
  name?: string
  parameters?: any[]
  query?: string
  read_replica_region?: string
  recovery_time_target_unix?: number
  rollback?: string

  // Selects a custom action instead of the plain update:
  //   'migration'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseRemoveMatch {
  invite_id?: string
  project_id: string
  user_id?: string

  // Selects a custom action instead of the plain remove:
  //   'migration'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseUpgradeStatusResponseOutput {
  error?: string
  initiated_at: string
  latest_status_at: string
  progress?: string
  status: number
  target_version: string
}

export interface DatabaseUpgradeStatusResponseOutputLoadMatch {
  project_id: string
  tracking_id?: string
}

export interface Deploy {
}

export interface DeployCreateData {
  project_id: string
  bundle_only?: string
  slug?: string
}

export interface Disk {
  attributes: any
  last_modified_at?: string
}

export interface DiskLoadMatch {
  project_id: string
}

export interface DiskAutoscaleConfigOutput {
  growth_percent: number
  max_size_gb: number
  min_increment_gb: number
}

export interface DiskAutoscaleConfigOutputLoadMatch {
  project_id: string
}

export interface DiskUtilMetricsResponseOutput {
  fs_avail_bytes: number
  fs_size_bytes: number
  fs_used_bytes: number
}

export interface DiskUtilMetricsResponseOutputLoadMatch {
  project_id: string
}

export interface Domain {
}

export interface DomainRemoveMatch {
  ref: string
  remove_addon?: string
}

export interface EdgeFunction {
  id?: string
}

export interface EdgeFunctionRemoveMatch {
  id: string
  project_id: string
}

export interface Environment {
}

export interface EnvironmentLoadMatch {
  branch_id_or_ref: any
  included_schema?: string
  pgdelta?: string
}

export interface EnvironmentRemoveMatch {
  ref: string
}

export interface FunctionType {
  body: string
  created_at: number
  entrypoint_path?: string
  ezbr_sha256?: string
  id: string
  import_map?: boolean
  import_map_path?: string
  name: string
  slug: string
  status: string
  updated_at: number
  verify_jwt?: boolean
  version: number
}

export interface FunctionLoadMatch {
  id: string
  project_id: string
}

export interface FunctionListMatch {
  ref: string
}

export interface FunctionCreateData {
  ref: string
  entrypoint_path?: string
  ezbr_sha256?: string
  import_map?: string
  import_map_path?: string
  name?: string
  slug?: string
  verify_jwt?: string
  body: string
  created_at: number
  id: string
  status: string
  updated_at: number
  version: number
}

export interface FunctionUpdateData {
  id: string
  project_id: string
  entrypoint_path?: string
  ezbr_sha256?: string
  import_map?: string
  import_map_path?: string
  name?: string
  slug?: string
  verify_jwt?: string
  body?: string
  created_at?: number
  status?: string
  updated_at?: number
  version?: number
}

export interface FunctionscombinedStat {
  error?: any
  result?: any[]
}

export interface FunctionscombinedStatListMatch {
  project_id: string
  function_id: string
  interval: string
}

export interface Invite {
  email: string
  invite_id: string
  roles: any[]
  user_roles: any[]
}

export interface InviteCreateData {
  project_id: string
  email: string
  invite_id: string
  roles: any[]
  user_roles: any[]
}

export interface Jit {
  act?: string
  allowed_networks?: Record<string, any>
  branches_only?: boolean
  expires_at?: number
  rhost: any
  role: string
  roles: any[]
  user_id?: string
  user_role: Record<string, any>
  user_roles: any[]
}

export interface JitListMatch {
  project_id: string
}

export interface JitCreateData {
  project_id: string
  act?: string
  allowed_networks?: Record<string, any>
  branches_only?: boolean
  expires_at?: number
  rhost: any
  role: string
  roles: any[]
  user_id?: string
  user_role: Record<string, any>
  user_roles: any[]
}

export interface JitUpdateData {
  project_id: string
  act?: string
  allowed_networks?: Record<string, any>
  branches_only?: boolean
  expires_at?: number
  rhost?: any
  role?: string
  roles?: any[]
  user_id?: string
  user_role?: Record<string, any>
  user_roles?: any[]
}

export interface JitAccessResponseOutput {
  email: string
  token: string
  user_id?: string
  user_roles: any[]
}

export interface JitAccessResponseOutputCreateData {
  project_id: string
  email: string
  token: string
  user_id?: string
  user_roles: any[]
}

export interface JitListAccessResponseOutput {
  items: any[]
}

export interface JitListAccessResponseOutputListMatch {
  project_id: string
}

export interface Legacy {
  enabled: boolean
}

export interface LegacyLoadMatch {
  project_id: string
}

export interface LegacyUpdateData {
  project_id: string
  enabled: boolean
}

export interface ListActionRunResponseOutput {
  branch_id: string
  check_run_id: number
  created_at: string
  git_config?: any
  id: string
  run_steps: any[]
  updated_at: string
  workdir: string
}

export interface ListActionRunResponseOutputListMatch {
  ref: string
  limit?: number
  offset?: number
}

export interface ListProjectAddonsResponseOutput {
  available_addons: any[]
  selected_addons: any[]
}

export interface ListProjectAddonsResponseOutputListMatch {
  project_id: string
}

export interface ListProvidersResponseOutput {
  created_at?: string
  domains?: any[]
  id: string
  saml: Record<string, any>
  updated_at?: string
}

export interface ListProvidersResponseOutputListMatch {
  project_id: string
}

export interface Log {
  error?: any
  result?: any[]
}

export interface LogListMatch {
  project_id: string
  iso_timestamp_end?: string
  iso_timestamp_start?: string
  sql?: string
}

export interface NetworkBanResponseEnrichedOutput {
}

export interface NetworkBanResponseEnrichedOutputCreateData {
  project_id: string
}

export interface NetworkBanResponseOutput {
}

export interface NetworkBanResponseOutputCreateData {
  project_id: string
}

export interface NetworkRestriction {
  add?: Record<string, any>
  applied_at?: string
  config: Record<string, any>
  entitlement: string
  old_config?: Record<string, any>
  remove?: Record<string, any>
  status: string
  updated_at?: string
}

export interface NetworkRestrictionLoadMatch {
  ref: string
}

export interface NetworkRestrictionUpdateData {
  ref: string
  add?: Record<string, any>
  applied_at?: string
  config?: Record<string, any>
  entitlement?: string
  old_config?: Record<string, any>
  remove?: Record<string, any>
  status?: string
  updated_at?: string
}

export interface NetworkRestrictionsResponseOutput {
  dbAllowedCidrs?: any[]
  dbAllowedCidrsV6?: any[]
}

export interface NetworkRestrictionsResponseOutputCreateData {
  project_id: string
  dbAllowedCidrs?: any[]
  dbAllowedCidrsV6?: any[]
}

export interface OAuth {
  client_id: string
  client_secret: string
  refresh_token: string
}

export interface OAuthLoadMatch {
  client_id: string
  code_challenge?: string
  code_challenge_method?: string
  organization_slug?: string
  redirect_uri: string
  resource?: string
  response_mode?: string
  response_type: string
  scope?: string
  state?: string
  target_flow?: string
  project_ref?: string
}

export interface OAuthCreateData {
  client_id: string
  client_secret: string
  refresh_token: string
}

export interface OAuthTokenResponseOutput {
  access_token: string
  expires_in: number
  refresh_token?: string
  token_type: string
}

export interface OAuthTokenResponseOutputCreateData {
  access_token: string
  expires_in: number
  refresh_token?: string
  token_type: string
}

export interface Organization {
}

export interface OrganizationCreateData {
  organization_id: string
  token: string
}

export interface OrganizationProjectClaimResponseOutput {
  created_at: string
  created_by: string
  expires_at: string
  preview: Record<string, any>
  project: Record<string, any>
}

export interface OrganizationProjectClaimResponseOutputLoadMatch {
  organization_id: string
  token: string
}

export interface OrganizationProjectsResponseOutput {
  cloud_provider: string
  databases: any[]
  inserted_at: string
  is_branch: boolean
  name: string
  ref: string
  region: string
  status: string
}

export interface OrganizationProjectsResponseOutputListMatch {
  slug: string
  limit?: number
  offset?: number
  search?: string
  sort?: string
  status?: string
}

export interface Performance {
  cache_key: string
  categories: any[]
  description: string
  detail: string
  facing: string
  level: string
  metadata?: Record<string, any>
  name: string
  observed_at?: string
  remediation: string
  title: string
}

export interface PerformanceListMatch {
  project_id: string
}

export interface Pgsodium {
  root_key: string
}

export interface PgsodiumLoadMatch {
  ref: string
}

export interface PgsodiumUpdateData {
  ref: string
  root_key?: string
}

export interface Postgre {
  checkpoint_timeout?: string
  cron_log_statement?: boolean
  effective_cache_size?: string
  hot_standby_feedback?: boolean
  log_autovacuum_min_duration?: string
  log_checkpoints?: boolean
  log_connections?: boolean
  log_disconnections?: boolean
  log_duration?: boolean
  log_lock_waits?: boolean
  log_recovery_conflict_waits?: boolean
  log_replication_commands?: boolean
  log_startup_progress_interval?: string
  log_temp_files?: string
  logical_decoding_work_mem?: string
  maintenance_work_mem?: string
  max_connections?: number
  max_locks_per_transaction?: number
  max_logical_replication_workers?: number
  max_parallel_maintenance_workers?: number
  max_parallel_workers?: number
  max_parallel_workers_per_gather?: number
  max_replication_slots?: number
  max_slot_wal_keep_size?: string
  max_standby_archive_delay?: string
  max_standby_streaming_delay?: string
  max_sync_workers_per_subscription?: number
  max_wal_senders?: number
  max_wal_size?: string
  max_worker_processes?: number
  restart_database?: boolean
  session_replication_role?: string
  shared_buffers?: string
  statement_timeout?: string
  track_activity_query_size?: string
  track_commit_timestamp?: boolean
  wal_keep_size?: string
  wal_sender_timeout?: string
  work_mem?: string
}

export interface PostgreLoadMatch {
  project_id: string
}

export interface PostgreUpdateData {
  project_id: string
  checkpoint_timeout?: string
  cron_log_statement?: boolean
  effective_cache_size?: string
  hot_standby_feedback?: boolean
  log_autovacuum_min_duration?: string
  log_checkpoints?: boolean
  log_connections?: boolean
  log_disconnections?: boolean
  log_duration?: boolean
  log_lock_waits?: boolean
  log_recovery_conflict_waits?: boolean
  log_replication_commands?: boolean
  log_startup_progress_interval?: string
  log_temp_files?: string
  logical_decoding_work_mem?: string
  maintenance_work_mem?: string
  max_connections?: number
  max_locks_per_transaction?: number
  max_logical_replication_workers?: number
  max_parallel_maintenance_workers?: number
  max_parallel_workers?: number
  max_parallel_workers_per_gather?: number
  max_replication_slots?: number
  max_slot_wal_keep_size?: string
  max_standby_archive_delay?: string
  max_standby_streaming_delay?: string
  max_sync_workers_per_subscription?: number
  max_wal_senders?: number
  max_wal_size?: string
  max_worker_processes?: number
  restart_database?: boolean
  session_replication_role?: string
  shared_buffers?: string
  statement_timeout?: string
  track_activity_query_size?: string
  track_commit_timestamp?: boolean
  wal_keep_size?: string
  wal_sender_timeout?: string
  work_mem?: string
}

export interface Postgrest {
  db_extra_search_path: string
  db_pool: number
  db_pool_acquisition_timeout: number
  db_schema: string
  jwt_secret?: string
  max_rows: number
}

export interface PostgrestLoadMatch {
  ref: string
}

export interface Project {
}

export interface ProjectCreateData {
  ref: string

  // Selects a custom action instead of the plain create:
  //   'config_disk' | 'restore' | 'restore_cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectRemoveMatch {
  ref: string

  // Selects a custom action instead of the plain remove:
  //   'network_ban'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProjectAvailableRestoreVersionsResponseOutput {
  postgres_engine: string
  release_channel: string
  version: string
}

export interface ProjectAvailableRestoreVersionsResponseOutputListMatch {
  ref: string
}

export interface ProjectClaimTokenResponseOutput {
  created_at: string
  created_by: string
  expires_at: string
  token_alias: string
}

export interface ProjectClaimTokenResponseOutputLoadMatch {
  ref: string
}

export interface ProjectUpgradeEligibilityResponseOutput {
  app_version: string
  postgres_version: string
  release_channel: string
}

export interface ProjectUpgradeEligibilityResponseOutputListMatch {
  project_id: string
}

export interface ProjectUpgradeInitiateResponseOutput {
  release_channel?: string
  target_version: string
}

export interface ProjectUpgradeInitiateResponseOutputCreateData {
  ref: string
  release_channel?: string
  target_version: string
}

export interface Provider {
  created_at?: string
  domains?: any[]
  id: string
  saml: Record<string, any>
  updated_at?: string
}

export interface ProviderLoadMatch {
  id: string
  project_id: string
}

export interface ProviderRemoveMatch {
  id: string
  project_id: string
}

export interface ReadOnlyStatusResponseOutput {
  enabled: boolean
  override_active_until: string
  override_enabled: boolean
}

export interface ReadOnlyStatusResponseOutputLoadMatch {
  ref: string
}

export interface Realtime {
  admin_suspended_at: string
  connection_pool: number
  max_bytes_per_second: number
  max_channels_per_client: number
  max_concurrent_users: number
  max_events_per_second: number
  max_joins_per_second: number
  max_payload_size_in_kb: number
  max_presence_events_per_second: number
  postgres_changes_pool: number
  presence_enabled: boolean
  private_only: boolean
  suspend: boolean
}

export interface RealtimeLoadMatch {
  project_id: string
}

export interface RealtimeCreateData {
  project_id: string
  admin_suspended_at: string
  connection_pool: number
  max_bytes_per_second: number
  max_channels_per_client: number
  max_concurrent_users: number
  max_events_per_second: number
  max_joins_per_second: number
  max_payload_size_in_kb: number
  max_presence_events_per_second: number
  postgres_changes_pool: number
  presence_enabled: boolean
  private_only: boolean
  suspend: boolean

  // Selects a custom action instead of the plain create:
  //   'shutdown'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface RealtimeUpdateData {
  project_id: string
  admin_suspended_at?: string
  connection_pool?: number
  max_bytes_per_second?: number
  max_channels_per_client?: number
  max_concurrent_users?: number
  max_events_per_second?: number
  max_joins_per_second?: number
  max_payload_size_in_kb?: number
  max_presence_events_per_second?: number
  postgres_changes_pool?: number
  presence_enabled?: boolean
  private_only?: boolean
  suspend?: boolean
}

export interface RegionsInfoOutput {
  all: Record<string, any>
  recommendations: Record<string, any>
}

export interface RegionsInfoOutputLoadMatch {
  continent?: string
  desired_instance_size?: string
  organization_slug: string
}

export interface RolesResponseOutput {
}

export interface RolesResponseOutputRemoveMatch {
  project_id: string
}

export interface Secret {
  name: string
  updated_at?: string
  value: string
}

export interface SecretListMatch {
  ref: string
}

export interface SecretCreateData {
  ref: string
  name: string
  updated_at?: string
  value: string
}

export interface SecretRemoveMatch {
  ref: string
}

export interface Security {
  cache_key: string
  categories: any[]
  description: string
  detail: string
  facing: string
  level: string
  metadata?: Record<string, any>
  name: string
  observed_at?: string
  remediation: string
  title: string
}

export interface SecurityListMatch {
  project_id: string
  lint_type?: string
}

export interface SigningKey {
  algorithm: string
  created_at: string
  id: string
  private_jwk?: any
  public_jwk: any
  status: string
  updated_at: string
}

export interface SigningKeyLoadMatch {
  id: string
  project_id: string
}

export interface SigningKeyListMatch {
  project_id: string
}

export interface SigningKeyCreateData {
  project_id: string
  algorithm: string
  created_at: string
  id: string
  private_jwk?: any
  public_jwk: any
  status: string
  updated_at: string
}

export interface SigningKeyUpdateData {
  id: string
  project_id: string
  algorithm?: string
  created_at?: string
  private_jwk?: any
  public_jwk?: any
  status?: string
  updated_at?: string
}

export interface SigningKeyRemoveMatch {
  id: string
  project_id: string
}

export interface SigningKeyResponseOutput {
  algorithm: string
  created_at: string
  id: string
  public_jwk: any
  status: string
  updated_at: string
}

export interface SigningKeyResponseOutputLoadMatch {
  project_id: string
}

export interface SigningKeyResponseOutputCreateData {
  project_id: string
  algorithm: string
  created_at: string
  id: string
  public_jwk: any
  status: string
  updated_at: string
}

export interface Snippet {
  content: Record<string, any>
  description: string
  favorite: boolean
  id: string
  inserted_at: string
  name: string
  owner: Record<string, any>
  project: Record<string, any>
  type: string
  updated_at: string
  updated_by: Record<string, any>
  visibility: string
}

export interface SnippetLoadMatch {
  id: string
}

export interface SnippetListMatch {
  cursor?: string
  limit?: string
  project_ref?: string
  sort_by?: string
  sort_order?: string
}

export interface SslEnforcement {
  appliedSuccessfully: boolean
  currentConfig: Record<string, any>
  requestedConfig: Record<string, any>
}

export interface SslEnforcementLoadMatch {
  ref: string
}

export interface SslEnforcementUpdateData {
  ref: string
  appliedSuccessfully?: boolean
  currentConfig?: Record<string, any>
  requestedConfig?: Record<string, any>
}

export interface Storage {
  capabilities: Record<string, any>
  external: Record<string, any>
  features: Record<string, any>
  fileSizeLimit: number
  migrationVersion: string
}

export interface StorageLoadMatch {
  project_id: string
}

export interface StorageUpdateData {
  project_id: string
  capabilities?: Record<string, any>
  external?: Record<string, any>
  features?: Record<string, any>
  fileSizeLimit?: number
  migrationVersion?: string
}

export interface StreamableFile {
}

export interface StreamableFileLoadMatch {
  function_slug: string
  project_id: string
}

export interface SubdomainAvailabilityResponseOutput {
  vanity_subdomain: string
}

export interface SubdomainAvailabilityResponseOutputCreateData {
  project_id: string
  vanity_subdomain: string
}

export interface SupavisorConfigResponseOutput {
  connectionString: string
  connection_string: string
  database_type: string
  db_host: string
  db_name: string
  db_port: number
  db_user: string
  default_pool_size: number
  identifier: string
  is_using_scram_auth: boolean
  max_client_conn: number
  pool_mode: string
}

export interface SupavisorConfigResponseOutputListMatch {
  project_id: string
}

export interface ThirdPartyAuth {
  custom_jwks?: any
  id: string
  inserted_at: string
  jwks_url?: string
  oidc_issuer_url?: string
  resolved_at?: string
  resolved_jwks?: any
  type: string
  updated_at: string
}

export interface ThirdPartyAuthLoadMatch {
  id: string
  project_id: string
}

export interface ThirdPartyAuthListMatch {
  project_id: string
}

export interface ThirdPartyAuthCreateData {
  project_id: string
  custom_jwks?: any
  id: string
  inserted_at: string
  jwks_url?: string
  oidc_issuer_url?: string
  resolved_at?: string
  resolved_jwks?: any
  type: string
  updated_at: string
}

export interface ThirdPartyAuthRemoveMatch {
  id: string
  project_id: string
}

export interface Typescript {
  types: string
}

export interface TypescriptLoadMatch {
  project_id: string
  included_schema?: string
}

export interface UpdateCustomHostnameResponseOutput {
  custom_hostname?: string
  data: Record<string, any>
  status: string
}

export interface UpdateCustomHostnameResponseOutputLoadMatch {
  ref: string
}

export interface UpdateCustomHostnameResponseOutputCreateData {
  project_id: string
  custom_hostname?: string
  data: Record<string, any>
  status: string
}

export interface UpdateProviderResponseOutput {
  attribute_mapping: Record<string, any>
  created_at?: string
  domains?: any[]
  id: string
  metadata_url?: string
  metadata_xml?: string
  name_id_format?: string
  saml: Record<string, any>
  updated_at?: string
}

export interface UpdateProviderResponseOutputUpdateData {
  project_id: string
  provider_id: string
  attribute_mapping?: Record<string, any>
  created_at?: string
  domains?: any[]
  id?: string
  metadata_url?: string
  metadata_xml?: string
  name_id_format?: string
  saml?: Record<string, any>
  updated_at?: string
}

export interface UpdateSupavisorConfigResponseOutput {
  default_pool_size: number
  pool_mode: string
}

export interface UpdateSupavisorConfigResponseOutputUpdateData {
  project_id: string
  default_pool_size?: number
  pool_mode?: string
}

export interface V1BackupScheduleResponseOutput {
  schedule_for: string
  updated_at: string
}

export interface V1BackupScheduleResponseOutputLoadMatch {
  project_id: string
}

export interface V1BackupScheduleResponseOutputUpdateData {
  project_id: string
  schedule_for?: string
  updated_at?: string
}

export interface V1BackupsResponseOutput {
  id: number
  inserted_at: string
  is_physical_backup: boolean
  status: string
}

export interface V1BackupsResponseOutputListMatch {
  project_id: string
}

export interface V1GetMigrationResponseOutput {
  created_by?: string
  idempotency_key?: string
  name?: string
  rollback?: any[]
  statements?: any[]
  version: string
}

export interface V1GetMigrationResponseOutputLoadMatch {
  project_id: string
  version: string
}

export interface V1GetUsageApiCountResponseOutput {
  timestamp: string
  total_auth_requests: number
  total_realtime_requests: number
  total_rest_requests: number
  total_storage_requests: number
}

export interface V1GetUsageApiCountResponseOutputListMatch {
  project_id: string
  interval?: string
}

export interface V1GetUsageApiRequestsCountResponseOutput {
  count: number
}

export interface V1GetUsageApiRequestsCountResponseOutputListMatch {
  project_id: string
}

export interface V1ListEntitlementsResponseOutput {
  config: any
  feature: Record<string, any>
  hasAccess: boolean
  type: string
}

export interface V1ListEntitlementsResponseOutputListMatch {
  slug: string
}

export interface V1ListMigrationsResponseOutput {
  name?: string
  version: string
}

export interface V1ListMigrationsResponseOutputListMatch {
  project_id: string
}

export interface V1OrganizationMemberResponseOutput {
  avatar_url: string
  email?: string
  mfa_enabled: boolean
  role_name?: string
  user_id: string
  user_name: string
}

export interface V1OrganizationMemberResponseOutputListMatch {
  slug: string
}

export interface V1OrganizationSlugResponseOutput {
  allowed_release_channels: any[]
  id: string
  name: string
  opt_in_tags: any[]
  plan?: string
  slug: string
}

export interface V1OrganizationSlugResponseOutputLoadMatch {
  slug: string
}

export interface V1OrganizationSlugResponseOutputListMatch {
  allowed_release_channels?: any[]
  id?: string
  name?: string
  opt_in_tags?: any[]
  plan?: string
  slug?: string
}

export interface V1OrganizationSlugResponseOutputCreateData {
  allowed_release_channels: any[]
  id: string
  name: string
  opt_in_tags: any[]
  plan?: string
  slug: string
}

export interface V1PgbouncerConfigResponseOutput {
  connection_string?: string
  default_pool_size?: number
  ignore_startup_parameters?: string
  max_client_conn?: number
  pool_mode?: string
  query_wait_timeout?: number
  reserve_pool_size?: number
  server_idle_timeout?: number
  server_lifetime?: number
}

export interface V1PgbouncerConfigResponseOutputLoadMatch {
  project_id: string
}

export interface V1ProfileResponseOutput {
  gotrue_id: string
  primary_email: string
  username: string
}

export interface V1ProfileResponseOutputLoadMatch {
  gotrue_id?: string
  primary_email?: string
  username?: string
}

export interface V1ProjectRefResponseOutput {
  id: number
  name: string
  ref: string
}

export interface V1ProjectRefResponseOutputUpdateData {
  ref: string
  id?: number
  name?: string
}

export interface V1ProjectRefResponseOutputRemoveMatch {
  ref: string
}

export interface V1ProjectWithDatabaseResponseOutput {
  created_at: string
  database: Record<string, any>
  db_pass: string
  desired_instance_size?: string
  high_availability?: boolean
  id: string
  kps_enabled?: boolean
  name: string
  organization_id: string
  organization_slug: string
  plan?: string
  postgres_engine?: null
  ref: string
  region: string
  region_selection?: any
  release_channel?: null
  status: string
  template_url?: string
}

export interface V1ProjectWithDatabaseResponseOutputLoadMatch {
  ref: string
}

export interface V1ProjectWithDatabaseResponseOutputListMatch {
  created_at?: string
  database?: Record<string, any>
  db_pass?: string
  desired_instance_size?: string
  high_availability?: boolean
  id?: string
  kps_enabled?: boolean
  name?: string
  organization_id?: string
  organization_slug?: string
  plan?: string
  postgres_engine?: null
  ref?: string
  region?: string
  region_selection?: any
  release_channel?: null
  status?: string
  template_url?: string
}

export interface V1ProjectWithDatabaseResponseOutputCreateData {
  created_at: string
  database: Record<string, any>
  db_pass: string
  desired_instance_size?: string
  high_availability?: boolean
  id: string
  kps_enabled?: boolean
  name: string
  organization_id: string
  organization_slug: string
  plan?: string
  postgres_engine?: null
  ref: string
  region: string
  region_selection?: any
  release_channel?: null
  status: string
  template_url?: string

  // Selects a custom action instead of the plain create:
  //   'claim_token' | 'pause' | 'restart'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface V1ProjectWithDatabaseResponseOutputUpdateData {
  ref: string
  created_at?: string
  database?: Record<string, any>
  db_pass?: string
  desired_instance_size?: string
  high_availability?: boolean
  id?: string
  kps_enabled?: boolean
  name?: string
  organization_id?: string
  organization_slug?: string
  plan?: string
  postgres_engine?: null
  region?: string
  region_selection?: any
  release_channel?: null
  status?: string
  template_url?: string

  // Selects a custom action instead of the plain update:
  //   'jit_access' | 'postgrest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface V1ProjectWithDatabaseResponseOutputRemoveMatch {
  ref: string

  // Selects a custom action instead of the plain remove:
  //   'claim_token'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface V1RestorePoint {
  completed_on: string
  name: string
  status: string
}

export interface V1RestorePointLoadMatch {
  project_id: string
  name?: string
}

export interface V1RestorePointCreateData {
  project_id: string
  completed_on: string
  name: string
  status: string
}

export interface V1ServiceHealthResponseOutput {
  error?: string
  healthy: boolean
  info?: any
  name: string
  status: string
}

export interface V1ServiceHealthResponseOutputListMatch {
  ref: string
  service: any
  timeout_m?: number
}

export interface V1StorageBucketResponseOutput {
  created_at: string
  id: string
  name: string
  owner: string
  public: boolean
  updated_at: string
}

export interface V1StorageBucketResponseOutputListMatch {
  project_id: string
}

export interface V1UpdatePasswordResponseOutput {
  message: string
  password: string
}

export interface V1UpdatePasswordResponseOutputUpdateData {
  project_id: string
  message?: string
  password?: string
}

export interface VanitySubdomain {
  custom_domain?: string
  status: string
}

export interface VanitySubdomainLoadMatch {
  ref: string
}

