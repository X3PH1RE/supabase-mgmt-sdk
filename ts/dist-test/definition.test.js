"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "action",
        "accessor": "Action",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/actions/{run_id}",
        "args": [
            {
                "name": "id",
                "wire": "run_id",
                "value": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "branch_id": "x",
            "run_steps": [
                {
                    "name": "clone",
                    "status": "CREATED",
                    "created_at": "x",
                    "updated_at": "x"
                }
            ],
            "workdir": "x",
            "check_run_id": 1,
            "created_at": "x",
            "updated_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "action",
        "accessor": "Action",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/actions/{run_id}/status",
        "action": "status",
        "args": [
            {
                "name": "id",
                "wire": "run_id",
                "value": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "message": "ok"
        },
        "idField": "id"
    },
    {
        "entity": "activate",
        "accessor": "Activate",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/vanity-subdomain/activate",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "custom_domain": "x"
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/api-keys",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "reveal": "true"
        },
        "headers": [],
        "query": [
            "reveal"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "api_key": "x",
            "id": "x",
            "type": "legacy",
            "prefix": "x",
            "name": "x",
            "description": "x",
            "hash": "x",
            "secret_jwt_template": {},
            "inserted_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/api-keys",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "reveal": "true"
        },
        "headers": [],
        "query": [
            "reveal"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "api_key": "x",
                "id": "x",
                "type": "legacy",
                "prefix": "x",
                "name": "x",
                "description": "x",
                "hash": "x",
                "secret_jwt_template": {},
                "inserted_at": "2026-01-01T00:00:00Z",
                "updated_at": "2026-01-01T00:00:00Z"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/api-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "22222222-2222-4222-8222-222222222222"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "reveal": "true"
        },
        "headers": [],
        "query": [
            "reveal"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "api_key": "x",
            "id": "x",
            "type": "legacy",
            "prefix": "x",
            "name": "x",
            "description": "x",
            "hash": "x",
            "secret_jwt_template": {},
            "inserted_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/api-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "22222222-2222-4222-8222-222222222222"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "reason": "rotating_key",
            "reveal": "v1",
            "was_compromised": "v1"
        },
        "headers": [],
        "query": [
            "reveal",
            "was_compromised",
            "reason"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "api_key": "x",
            "id": "x",
            "type": "legacy",
            "prefix": "x",
            "name": "x",
            "description": "x",
            "hash": "x",
            "secret_jwt_template": {},
            "inserted_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/api-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "22222222-2222-4222-8222-222222222222"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "reveal": "true"
        },
        "headers": [],
        "query": [
            "reveal"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "api_key": "x",
            "id": "x",
            "type": "legacy",
            "prefix": "x",
            "name": "x",
            "description": "x",
            "hash": "x",
            "secret_jwt_template": {},
            "inserted_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "api_max_request_duration": 1,
            "db_max_pool_size": 1,
            "db_max_pool_size_unit": "connections",
            "disable_signup": true,
            "external_anonymous_users_enabled": true,
            "external_apple_additional_client_ids": "x",
            "external_apple_client_id": "x",
            "external_apple_email_optional": true,
            "external_apple_enabled": true,
            "external_apple_secret": "x",
            "external_azure_client_id": "x",
            "external_azure_email_optional": true,
            "external_azure_enabled": true,
            "external_azure_secret": "x",
            "external_azure_url": "x",
            "external_bitbucket_client_id": "x",
            "external_bitbucket_email_optional": true,
            "external_bitbucket_enabled": true,
            "external_bitbucket_secret": "x",
            "external_discord_client_id": "x",
            "external_discord_email_optional": true,
            "external_discord_enabled": true,
            "external_discord_secret": "x",
            "external_email_enabled": true,
            "external_facebook_client_id": "x",
            "external_facebook_email_optional": true,
            "external_facebook_enabled": true,
            "external_facebook_secret": "x",
            "external_figma_client_id": "x",
            "external_figma_email_optional": true,
            "external_figma_enabled": true,
            "external_figma_secret": "x",
            "external_github_client_id": "x",
            "external_github_email_optional": true,
            "external_github_enabled": true,
            "external_github_secret": "x",
            "external_gitlab_client_id": "x",
            "external_gitlab_email_optional": true,
            "external_gitlab_enabled": true,
            "external_gitlab_secret": "x",
            "external_gitlab_url": "x",
            "external_google_additional_client_ids": "x",
            "external_google_client_id": "x",
            "external_google_email_optional": true,
            "external_google_enabled": true,
            "external_google_secret": "x",
            "external_google_skip_nonce_check": true,
            "external_kakao_client_id": "x",
            "external_kakao_email_optional": true,
            "external_kakao_enabled": true,
            "external_kakao_secret": "x",
            "external_keycloak_client_id": "x",
            "external_keycloak_email_optional": true,
            "external_keycloak_enabled": true,
            "external_keycloak_secret": "x",
            "external_keycloak_url": "x",
            "external_linkedin_oidc_client_id": "x",
            "external_linkedin_oidc_email_optional": true,
            "external_linkedin_oidc_enabled": true,
            "external_linkedin_oidc_secret": "x",
            "external_slack_oidc_client_id": "x",
            "external_slack_oidc_email_optional": true,
            "external_slack_oidc_enabled": true,
            "external_slack_oidc_secret": "x",
            "external_notion_client_id": "x",
            "external_notion_email_optional": true,
            "external_notion_enabled": true,
            "external_notion_secret": "x",
            "external_phone_enabled": true,
            "external_slack_client_id": "x",
            "external_slack_email_optional": true,
            "external_slack_enabled": true,
            "external_slack_secret": "x",
            "external_spotify_client_id": "x",
            "external_spotify_email_optional": true,
            "external_spotify_enabled": true,
            "external_spotify_secret": "x",
            "external_twitch_client_id": "x",
            "external_twitch_email_optional": true,
            "external_twitch_enabled": true,
            "external_twitch_secret": "x",
            "external_twitter_client_id": "x",
            "external_twitter_email_optional": true,
            "external_twitter_enabled": true,
            "external_twitter_secret": "x",
            "external_x_client_id": "x",
            "external_x_email_optional": true,
            "external_x_enabled": true,
            "external_x_secret": "x",
            "external_workos_client_id": "x",
            "external_workos_enabled": true,
            "external_workos_secret": "x",
            "external_workos_url": "x",
            "external_web3_solana_enabled": true,
            "external_web3_ethereum_enabled": true,
            "external_zoom_client_id": "x",
            "external_zoom_email_optional": true,
            "external_zoom_enabled": true,
            "external_zoom_secret": "x",
            "hook_custom_access_token_enabled": true,
            "hook_custom_access_token_uri": "x",
            "hook_custom_access_token_secrets": "x",
            "hook_mfa_verification_attempt_enabled": true,
            "hook_mfa_verification_attempt_uri": "x",
            "hook_mfa_verification_attempt_secrets": "x",
            "hook_password_verification_attempt_enabled": true,
            "hook_password_verification_attempt_uri": "x",
            "hook_password_verification_attempt_secrets": "x",
            "hook_send_sms_enabled": true,
            "hook_send_sms_uri": "x",
            "hook_send_sms_secrets": "x",
            "hook_send_email_enabled": true,
            "hook_send_email_uri": "x",
            "hook_send_email_secrets": "x",
            "hook_before_user_created_enabled": true,
            "hook_before_user_created_uri": "x",
            "hook_before_user_created_secrets": "x",
            "hook_after_user_created_enabled": true,
            "hook_after_user_created_uri": "x",
            "hook_after_user_created_secrets": "x",
            "jwt_exp": 1,
            "mailer_allow_unverified_email_sign_ins": true,
            "mailer_autoconfirm": true,
            "mailer_otp_exp": 1,
            "mailer_otp_length": 1,
            "mailer_secure_email_change_enabled": true,
            "mailer_subjects_confirmation": "x",
            "mailer_subjects_email_change": "x",
            "mailer_subjects_invite": "x",
            "mailer_subjects_magic_link": "x",
            "mailer_subjects_reauthentication": "x",
            "mailer_subjects_recovery": "x",
            "mailer_subjects_password_changed_notification": "x",
            "mailer_subjects_email_changed_notification": "x",
            "mailer_subjects_phone_changed_notification": "x",
            "mailer_subjects_mfa_factor_enrolled_notification": "x",
            "mailer_subjects_mfa_factor_unenrolled_notification": "x",
            "mailer_subjects_identity_linked_notification": "x",
            "mailer_subjects_identity_unlinked_notification": "x",
            "mailer_templates_confirmation_content": "x",
            "mailer_templates_email_change_content": "x",
            "mailer_templates_invite_content": "x",
            "mailer_templates_magic_link_content": "x",
            "mailer_templates_reauthentication_content": "x",
            "mailer_templates_recovery_content": "x",
            "mailer_templates_password_changed_notification_content": "x",
            "mailer_templates_email_changed_notification_content": "x",
            "mailer_templates_phone_changed_notification_content": "x",
            "mailer_templates_mfa_factor_enrolled_notification_content": "x",
            "mailer_templates_mfa_factor_unenrolled_notification_content": "x",
            "mailer_templates_identity_linked_notification_content": "x",
            "mailer_templates_identity_unlinked_notification_content": "x",
            "mailer_notifications_password_changed_enabled": true,
            "mailer_notifications_email_changed_enabled": true,
            "mailer_notifications_phone_changed_enabled": true,
            "mailer_notifications_mfa_factor_enrolled_enabled": true,
            "mailer_notifications_mfa_factor_unenrolled_enabled": true,
            "mailer_notifications_identity_linked_enabled": true,
            "mailer_notifications_identity_unlinked_enabled": true,
            "mfa_max_enrolled_factors": 1,
            "mfa_totp_enroll_enabled": true,
            "mfa_totp_verify_enabled": true,
            "mfa_phone_enroll_enabled": true,
            "mfa_phone_verify_enabled": true,
            "mfa_web_authn_enroll_enabled": true,
            "mfa_web_authn_verify_enabled": true,
            "passkey_enabled": true,
            "webauthn_rp_display_name": "x",
            "webauthn_rp_id": "x",
            "webauthn_rp_origins": "x",
            "mfa_phone_otp_length": 1,
            "mfa_phone_template": "x",
            "mfa_phone_max_frequency": 1,
            "nimbus_oauth_client_id": "x",
            "nimbus_oauth_email_optional": true,
            "nimbus_oauth_client_secret": "x",
            "password_hibp_enabled": true,
            "password_min_length": 1,
            "password_required_characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
            "rate_limit_anonymous_users": 1,
            "rate_limit_email_sent": 1,
            "rate_limit_sms_sent": 1,
            "rate_limit_token_refresh": 1,
            "rate_limit_verify": 1,
            "rate_limit_otp": 1,
            "rate_limit_web3": 1,
            "refresh_token_rotation_enabled": true,
            "saml_enabled": true,
            "saml_external_url": "x",
            "saml_allow_encrypted_assertions": true,
            "security_sb_forwarded_for_enabled": true,
            "security_captcha_enabled": true,
            "security_captcha_provider": "turnstile",
            "security_captcha_secret": "x",
            "security_manual_linking_enabled": true,
            "security_refresh_token_reuse_interval": 1,
            "security_update_password_require_current_password": true,
            "security_update_password_require_reauthentication": true,
            "sessions_inactivity_timeout": 1,
            "sessions_single_per_user": true,
            "sessions_tags": "x",
            "sessions_timebox": 1,
            "site_url": "x",
            "sms_autoconfirm": true,
            "sms_max_frequency": 1,
            "sms_messagebird_access_key": "x",
            "sms_messagebird_originator": "x",
            "sms_otp_exp": 1,
            "sms_otp_length": 1,
            "sms_provider": "messagebird",
            "sms_template": "x",
            "sms_test_otp": "x",
            "sms_test_otp_valid_until": "2026-01-01T00:00:00Z",
            "sms_textlocal_api_key": "x",
            "sms_textlocal_sender": "x",
            "sms_twilio_account_sid": "x",
            "sms_twilio_auth_token": "x",
            "sms_twilio_content_sid": "x",
            "sms_twilio_message_service_sid": "x",
            "sms_twilio_verify_account_sid": "x",
            "sms_twilio_verify_auth_token": "x",
            "sms_twilio_verify_message_service_sid": "x",
            "sms_vonage_api_key": "x",
            "sms_vonage_api_secret": "x",
            "sms_vonage_from": "x",
            "smtp_admin_email": "x",
            "smtp_host": "x",
            "smtp_max_frequency": 1,
            "smtp_pass": "x",
            "smtp_port": "x",
            "smtp_sender_name": "x",
            "smtp_user": "x",
            "uri_allow_list": "x",
            "oauth_server_enabled": true,
            "oauth_server_allow_dynamic_registration": true,
            "oauth_server_authorization_path": "x",
            "custom_oauth_enabled": true,
            "custom_oauth_max_providers": 1
        },
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/config/auth",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "api_max_request_duration": 1,
            "db_max_pool_size": 1,
            "db_max_pool_size_unit": "connections",
            "disable_signup": true,
            "external_anonymous_users_enabled": true,
            "external_apple_additional_client_ids": "x",
            "external_apple_client_id": "x",
            "external_apple_email_optional": true,
            "external_apple_enabled": true,
            "external_apple_secret": "x",
            "external_azure_client_id": "x",
            "external_azure_email_optional": true,
            "external_azure_enabled": true,
            "external_azure_secret": "x",
            "external_azure_url": "x",
            "external_bitbucket_client_id": "x",
            "external_bitbucket_email_optional": true,
            "external_bitbucket_enabled": true,
            "external_bitbucket_secret": "x",
            "external_discord_client_id": "x",
            "external_discord_email_optional": true,
            "external_discord_enabled": true,
            "external_discord_secret": "x",
            "external_email_enabled": true,
            "external_facebook_client_id": "x",
            "external_facebook_email_optional": true,
            "external_facebook_enabled": true,
            "external_facebook_secret": "x",
            "external_figma_client_id": "x",
            "external_figma_email_optional": true,
            "external_figma_enabled": true,
            "external_figma_secret": "x",
            "external_github_client_id": "x",
            "external_github_email_optional": true,
            "external_github_enabled": true,
            "external_github_secret": "x",
            "external_gitlab_client_id": "x",
            "external_gitlab_email_optional": true,
            "external_gitlab_enabled": true,
            "external_gitlab_secret": "x",
            "external_gitlab_url": "x",
            "external_google_additional_client_ids": "x",
            "external_google_client_id": "x",
            "external_google_email_optional": true,
            "external_google_enabled": true,
            "external_google_secret": "x",
            "external_google_skip_nonce_check": true,
            "external_kakao_client_id": "x",
            "external_kakao_email_optional": true,
            "external_kakao_enabled": true,
            "external_kakao_secret": "x",
            "external_keycloak_client_id": "x",
            "external_keycloak_email_optional": true,
            "external_keycloak_enabled": true,
            "external_keycloak_secret": "x",
            "external_keycloak_url": "x",
            "external_linkedin_oidc_client_id": "x",
            "external_linkedin_oidc_email_optional": true,
            "external_linkedin_oidc_enabled": true,
            "external_linkedin_oidc_secret": "x",
            "external_slack_oidc_client_id": "x",
            "external_slack_oidc_email_optional": true,
            "external_slack_oidc_enabled": true,
            "external_slack_oidc_secret": "x",
            "external_notion_client_id": "x",
            "external_notion_email_optional": true,
            "external_notion_enabled": true,
            "external_notion_secret": "x",
            "external_phone_enabled": true,
            "external_slack_client_id": "x",
            "external_slack_email_optional": true,
            "external_slack_enabled": true,
            "external_slack_secret": "x",
            "external_spotify_client_id": "x",
            "external_spotify_email_optional": true,
            "external_spotify_enabled": true,
            "external_spotify_secret": "x",
            "external_twitch_client_id": "x",
            "external_twitch_email_optional": true,
            "external_twitch_enabled": true,
            "external_twitch_secret": "x",
            "external_twitter_client_id": "x",
            "external_twitter_email_optional": true,
            "external_twitter_enabled": true,
            "external_twitter_secret": "x",
            "external_x_client_id": "x",
            "external_x_email_optional": true,
            "external_x_enabled": true,
            "external_x_secret": "x",
            "external_workos_client_id": "x",
            "external_workos_enabled": true,
            "external_workos_secret": "x",
            "external_workos_url": "x",
            "external_web3_solana_enabled": true,
            "external_web3_ethereum_enabled": true,
            "external_zoom_client_id": "x",
            "external_zoom_email_optional": true,
            "external_zoom_enabled": true,
            "external_zoom_secret": "x",
            "hook_custom_access_token_enabled": true,
            "hook_custom_access_token_uri": "x",
            "hook_custom_access_token_secrets": "x",
            "hook_mfa_verification_attempt_enabled": true,
            "hook_mfa_verification_attempt_uri": "x",
            "hook_mfa_verification_attempt_secrets": "x",
            "hook_password_verification_attempt_enabled": true,
            "hook_password_verification_attempt_uri": "x",
            "hook_password_verification_attempt_secrets": "x",
            "hook_send_sms_enabled": true,
            "hook_send_sms_uri": "x",
            "hook_send_sms_secrets": "x",
            "hook_send_email_enabled": true,
            "hook_send_email_uri": "x",
            "hook_send_email_secrets": "x",
            "hook_before_user_created_enabled": true,
            "hook_before_user_created_uri": "x",
            "hook_before_user_created_secrets": "x",
            "hook_after_user_created_enabled": true,
            "hook_after_user_created_uri": "x",
            "hook_after_user_created_secrets": "x",
            "jwt_exp": 1,
            "mailer_allow_unverified_email_sign_ins": true,
            "mailer_autoconfirm": true,
            "mailer_otp_exp": 1,
            "mailer_otp_length": 1,
            "mailer_secure_email_change_enabled": true,
            "mailer_subjects_confirmation": "x",
            "mailer_subjects_email_change": "x",
            "mailer_subjects_invite": "x",
            "mailer_subjects_magic_link": "x",
            "mailer_subjects_reauthentication": "x",
            "mailer_subjects_recovery": "x",
            "mailer_subjects_password_changed_notification": "x",
            "mailer_subjects_email_changed_notification": "x",
            "mailer_subjects_phone_changed_notification": "x",
            "mailer_subjects_mfa_factor_enrolled_notification": "x",
            "mailer_subjects_mfa_factor_unenrolled_notification": "x",
            "mailer_subjects_identity_linked_notification": "x",
            "mailer_subjects_identity_unlinked_notification": "x",
            "mailer_templates_confirmation_content": "x",
            "mailer_templates_email_change_content": "x",
            "mailer_templates_invite_content": "x",
            "mailer_templates_magic_link_content": "x",
            "mailer_templates_reauthentication_content": "x",
            "mailer_templates_recovery_content": "x",
            "mailer_templates_password_changed_notification_content": "x",
            "mailer_templates_email_changed_notification_content": "x",
            "mailer_templates_phone_changed_notification_content": "x",
            "mailer_templates_mfa_factor_enrolled_notification_content": "x",
            "mailer_templates_mfa_factor_unenrolled_notification_content": "x",
            "mailer_templates_identity_linked_notification_content": "x",
            "mailer_templates_identity_unlinked_notification_content": "x",
            "mailer_notifications_password_changed_enabled": true,
            "mailer_notifications_email_changed_enabled": true,
            "mailer_notifications_phone_changed_enabled": true,
            "mailer_notifications_mfa_factor_enrolled_enabled": true,
            "mailer_notifications_mfa_factor_unenrolled_enabled": true,
            "mailer_notifications_identity_linked_enabled": true,
            "mailer_notifications_identity_unlinked_enabled": true,
            "mfa_max_enrolled_factors": 1,
            "mfa_totp_enroll_enabled": true,
            "mfa_totp_verify_enabled": true,
            "mfa_phone_enroll_enabled": true,
            "mfa_phone_verify_enabled": true,
            "mfa_web_authn_enroll_enabled": true,
            "mfa_web_authn_verify_enabled": true,
            "passkey_enabled": true,
            "webauthn_rp_display_name": "x",
            "webauthn_rp_id": "x",
            "webauthn_rp_origins": "x",
            "mfa_phone_otp_length": 1,
            "mfa_phone_template": "x",
            "mfa_phone_max_frequency": 1,
            "nimbus_oauth_client_id": "x",
            "nimbus_oauth_email_optional": true,
            "nimbus_oauth_client_secret": "x",
            "password_hibp_enabled": true,
            "password_min_length": 1,
            "password_required_characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789",
            "rate_limit_anonymous_users": 1,
            "rate_limit_email_sent": 1,
            "rate_limit_sms_sent": 1,
            "rate_limit_token_refresh": 1,
            "rate_limit_verify": 1,
            "rate_limit_otp": 1,
            "rate_limit_web3": 1,
            "refresh_token_rotation_enabled": true,
            "saml_enabled": true,
            "saml_external_url": "x",
            "saml_allow_encrypted_assertions": true,
            "security_sb_forwarded_for_enabled": true,
            "security_captcha_enabled": true,
            "security_captcha_provider": "turnstile",
            "security_captcha_secret": "x",
            "security_manual_linking_enabled": true,
            "security_refresh_token_reuse_interval": 1,
            "security_update_password_require_current_password": true,
            "security_update_password_require_reauthentication": true,
            "sessions_inactivity_timeout": 1,
            "sessions_single_per_user": true,
            "sessions_tags": "x",
            "sessions_timebox": 1,
            "site_url": "x",
            "sms_autoconfirm": true,
            "sms_max_frequency": 1,
            "sms_messagebird_access_key": "x",
            "sms_messagebird_originator": "x",
            "sms_otp_exp": 1,
            "sms_otp_length": 1,
            "sms_provider": "messagebird",
            "sms_template": "x",
            "sms_test_otp": "x",
            "sms_test_otp_valid_until": "2026-01-01T00:00:00Z",
            "sms_textlocal_api_key": "x",
            "sms_textlocal_sender": "x",
            "sms_twilio_account_sid": "x",
            "sms_twilio_auth_token": "x",
            "sms_twilio_content_sid": "x",
            "sms_twilio_message_service_sid": "x",
            "sms_twilio_verify_account_sid": "x",
            "sms_twilio_verify_auth_token": "x",
            "sms_twilio_verify_message_service_sid": "x",
            "sms_vonage_api_key": "x",
            "sms_vonage_api_secret": "x",
            "sms_vonage_from": "x",
            "smtp_admin_email": "x",
            "smtp_host": "x",
            "smtp_max_frequency": 1,
            "smtp_pass": "x",
            "smtp_port": "x",
            "smtp_sender_name": "x",
            "smtp_user": "x",
            "uri_allow_list": "x",
            "oauth_server_enabled": true,
            "oauth_server_allow_dynamic_registration": true,
            "oauth_server_authorization_path": "x",
            "custom_oauth_enabled": true,
            "custom_oauth_max_providers": 1
        },
        "idField": "id"
    },
    {
        "entity": "billing",
        "accessor": "Billing",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/billing/addons/{addon_variant}",
        "args": [
            {
                "name": "addon_variant",
                "wire": "addon_variant",
                "value": "pitr_7"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "billing",
        "accessor": "Billing",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/billing/addons",
        "action": "addon",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "create",
        "method": "POST",
        "path": "/v1/branches/{branch_id_or_ref}/restore",
        "action": "restore",
        "args": [
            {
                "name": "branch_id_or_ref",
                "wire": "branch_id_or_ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "message": "Branch restoration initiated"
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/branches",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "name": "x",
            "project_ref": "x",
            "parent_project_ref": "x",
            "is_default": true,
            "git_branch": "x",
            "pr_number": 1,
            "latest_check_run_id": 1,
            "persistent": true,
            "status": "CREATING_PROJECT",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "review_requested_at": "2026-01-01T00:00:00Z",
            "with_data": true,
            "notify_url": "x",
            "deletion_scheduled_at": "2026-01-01T00:00:00Z",
            "preview_project_status": "INACTIVE"
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/branches",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "project_ref": "x",
                "parent_project_ref": "x",
                "is_default": true,
                "git_branch": "x",
                "pr_number": 1,
                "latest_check_run_id": 1,
                "persistent": true,
                "status": "CREATING_PROJECT",
                "created_at": "2026-01-01T00:00:00Z",
                "updated_at": "2026-01-01T00:00:00Z",
                "review_requested_at": "2026-01-01T00:00:00Z",
                "with_data": true,
                "notify_url": "x",
                "deletion_scheduled_at": "2026-01-01T00:00:00Z",
                "preview_project_status": "INACTIVE"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/branches/{name}",
        "args": [
            {
                "name": "id",
                "wire": "name",
                "value": "preview-login-page"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "project_ref": "x",
            "parent_project_ref": "x",
            "is_default": true,
            "git_branch": "x",
            "pr_number": 1,
            "latest_check_run_id": 1,
            "persistent": true,
            "status": "CREATING_PROJECT",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "review_requested_at": "2026-01-01T00:00:00Z",
            "with_data": true,
            "notify_url": "x",
            "deletion_scheduled_at": "2026-01-01T00:00:00Z",
            "preview_project_status": "INACTIVE"
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "load",
        "method": "GET",
        "path": "/v1/branches/{branch_id_or_ref}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id_or_ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "ref": "x",
            "postgres_version": "x",
            "postgres_engine": "x",
            "release_channel": "x",
            "status": "INACTIVE",
            "db_host": "x",
            "db_port": 1,
            "db_user": "x",
            "db_pass": "x",
            "jwt_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/branches/{branch_id_or_ref}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id_or_ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "force": "v1"
        },
        "headers": [],
        "query": [
            "force"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "message": "ok"
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/branches/{branch_id_or_ref}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id_or_ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "project_ref": "x",
            "parent_project_ref": "x",
            "is_default": true,
            "git_branch": "x",
            "pr_number": 1,
            "latest_check_run_id": 1,
            "persistent": true,
            "status": "CREATING_PROJECT",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "review_requested_at": "2026-01-01T00:00:00Z",
            "with_data": true,
            "notify_url": "x",
            "deletion_scheduled_at": "2026-01-01T00:00:00Z",
            "preview_project_status": "INACTIVE"
        },
        "idField": "id"
    },
    {
        "entity": "bulk_update_function_response_output",
        "accessor": "BulkUpdateFunctionResponseOutput",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/functions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "functions": [
                {
                    "id": "x",
                    "slug": "x",
                    "name": "x",
                    "status": "ACTIVE",
                    "version": 1,
                    "created_at": 1,
                    "updated_at": 1,
                    "verify_jwt": true,
                    "import_map": true,
                    "entrypoint_path": "x",
                    "import_map_path": "x",
                    "ezbr_sha256": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "create_provider_response_output",
        "accessor": "CreateProviderResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/auth/sso/providers",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "saml": {
                "entity_id": "x",
                "metadata_url": "x",
                "metadata_xml": "x",
                "attribute_mapping": {
                    "keys": {}
                },
                "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
            },
            "domains": [
                {
                    "domain": "x",
                    "created_at": "x",
                    "updated_at": "x"
                }
            ],
            "created_at": "x",
            "updated_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "create_role_response_output",
        "accessor": "CreateRoleResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/cli/login-role",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "role": "x",
            "password": "x",
            "ttl_seconds": 1
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/migrations",
        "action": "migration",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            }
        ],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/query",
        "action": "query",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/context",
        "action": "context",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "databases": [
                {
                    "name": "x",
                    "schemas": [
                        {
                            "name": "x"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/openapi",
        "action": "openapi",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "schema": "v1"
        },
        "headers": [],
        "query": [
            "schema"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/jit-access",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "state": "enabled",
            "appliedSuccessfully": true
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/database/migrations",
        "action": "migration",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "gte": "20250312000000"
        },
        "headers": [],
        "query": [
            "gte"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/database/jit/invite/{invite_id}",
        "args": [
            {
                "name": "invite_id",
                "wire": "invite_id",
                "value": "55555555-5555-4555-8555-555555555555"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/database/jit/{user_id}",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            },
            {
                "name": "user_id",
                "wire": "user_id",
                "value": "55555555-5555-4555-8555-555555555555"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/database/migrations",
        "action": "migration",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            }
        ],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/database/migrations/{version}",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            },
            {
                "name": "version",
                "wire": "version",
                "value": "20250312000000"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "database_upgrade_status_response_output",
        "accessor": "DatabaseUpgradeStatusResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/upgrade/status",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "tracking_id": "9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c"
        },
        "headers": [],
        "query": [
            "tracking_id"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "databaseUpgradeStatus": {
                "error": "1_upgraded_instance_launch_failed",
                "initiated_at": "x",
                "latest_status_at": "x",
                "progress": "0_requested",
                "status": 1,
                "target_version": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "deploy",
        "accessor": "Deploy",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/functions/deploy",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "bundle_only": "v1",
            "slug": "hello-world"
        },
        "headers": [],
        "query": [
            "slug",
            "bundleOnly"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "slug": "x",
            "name": "x",
            "status": "ACTIVE",
            "version": 1,
            "created_at": 1,
            "updated_at": 1,
            "verify_jwt": true,
            "import_map": true,
            "entrypoint_path": "x",
            "import_map_path": "x",
            "ezbr_sha256": "x"
        },
        "idField": "id"
    },
    {
        "entity": "disk",
        "accessor": "Disk",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/disk",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "attributes": {
                "iops": 1,
                "size_gb": 1,
                "throughput_mibps": 1,
                "type": "gp3"
            },
            "last_modified_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "disk_autoscale_config_output",
        "accessor": "DiskAutoscaleConfigOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/disk/autoscale",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "growth_percent": 1,
            "min_increment_gb": 1,
            "max_size_gb": 1
        },
        "idField": "id"
    },
    {
        "entity": "disk_util_metrics_response_output",
        "accessor": "DiskUtilMetricsResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/disk/util",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "timestamp": "x",
            "metrics": {
                "fs_avail_bytes": 1,
                "fs_size_bytes": 1,
                "fs_used_bytes": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "domain",
        "accessor": "Domain",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/custom-hostname",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "remove_addon": "v1"
        },
        "headers": [],
        "query": [
            "remove_addon"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "domain",
        "accessor": "Domain",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/vanity-subdomain",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "edge_function",
        "accessor": "EdgeFunction",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/functions/{function_slug}",
        "args": [
            {
                "name": "id",
                "wire": "function_slug",
                "value": "hello-world"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "environment",
        "accessor": "Environment",
        "op": "load",
        "method": "GET",
        "path": "/v1/branches/{branch_id_or_ref}/diff",
        "args": [
            {
                "name": "branch_id_or_ref",
                "wire": "branch_id_or_ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "included_schema": "v1",
            "pgdelta": "true"
        },
        "headers": [],
        "query": [
            "included_schemas",
            "pgdelta"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "environment",
        "accessor": "Environment",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/actions/{run_id}/logs",
        "args": [
            {
                "name": "action_id",
                "wire": "run_id",
                "value": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "environment",
        "accessor": "Environment",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/branches",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/functions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "entrypoint_path": "index.ts",
            "ezbr_sha256": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7",
            "import_map": "v1",
            "import_map_path": "import_map.json",
            "name": "Hello World",
            "slug": "hello-world",
            "verify_jwt": "v1"
        },
        "headers": [],
        "query": [
            "slug",
            "name",
            "verify_jwt",
            "import_map",
            "entrypoint_path",
            "import_map_path",
            "ezbr_sha256"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "slug": "x",
            "name": "x",
            "status": "ACTIVE",
            "version": 1,
            "created_at": 1,
            "updated_at": 1,
            "verify_jwt": true,
            "import_map": true,
            "entrypoint_path": "x",
            "import_map_path": "x",
            "ezbr_sha256": "x"
        },
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/functions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "slug": "x",
                "name": "x",
                "status": "ACTIVE",
                "version": 1,
                "created_at": 1,
                "updated_at": 1,
                "verify_jwt": true,
                "import_map": true,
                "entrypoint_path": "x",
                "import_map_path": "x",
                "ezbr_sha256": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/functions/{function_slug}",
        "args": [
            {
                "name": "id",
                "wire": "function_slug",
                "value": "hello-world"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "slug": "x",
            "name": "x",
            "status": "ACTIVE",
            "version": 1,
            "created_at": 1,
            "updated_at": 1,
            "verify_jwt": true,
            "import_map": true,
            "entrypoint_path": "x",
            "import_map_path": "x",
            "ezbr_sha256": "x"
        },
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/functions/{function_slug}",
        "args": [
            {
                "name": "id",
                "wire": "function_slug",
                "value": "hello-world"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "entrypoint_path": "index.ts",
            "ezbr_sha256": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7",
            "import_map": "v1",
            "import_map_path": "import_map.json",
            "name": "Hello World",
            "slug": "hello-world",
            "verify_jwt": "v1"
        },
        "headers": [],
        "query": [
            "slug",
            "name",
            "verify_jwt",
            "import_map",
            "entrypoint_path",
            "import_map_path",
            "ezbr_sha256"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "slug": "x",
            "name": "x",
            "status": "ACTIVE",
            "version": 1,
            "created_at": 1,
            "updated_at": 1,
            "verify_jwt": true,
            "import_map": true,
            "entrypoint_path": "x",
            "import_map_path": "x",
            "ezbr_sha256": "x"
        },
        "idField": "id"
    },
    {
        "entity": "functionscombined_stat",
        "accessor": "FunctionscombinedStat",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/analytics/endpoints/functions.combined-stats",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "function_id": "3c078cce-ad70-4148-9f37-4da362789053",
            "interval": "1hr"
        },
        "headers": [],
        "query": [
            "interval",
            "function_id"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "result": [],
            "error": "x"
        },
        "idField": "id"
    },
    {
        "entity": "invite",
        "accessor": "Invite",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/jit/invite",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "email": "x",
            "invite_id": "x",
            "user_roles": [
                {
                    "role": "x",
                    "expires_at": 1,
                    "allowed_networks": {
                        "allowed_cidrs": [
                            {
                                "cidr": "x"
                            }
                        ],
                        "allowed_cidrs_v6": [
                            {
                                "cidr": "x"
                            }
                        ]
                    },
                    "branches_only": true
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jit",
        "accessor": "Jit",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/jit",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "user_id": "x",
            "act": "x",
            "user_role": {
                "role": "x",
                "expires_at": 1,
                "allowed_networks": {
                    "allowed_cidrs": [
                        {
                            "cidr": "x"
                        }
                    ],
                    "allowed_cidrs_v6": [
                        {
                            "cidr": "x"
                        }
                    ]
                },
                "branches_only": true
            }
        },
        "idField": "id"
    },
    {
        "entity": "jit",
        "accessor": "Jit",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/jit",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "user_id": "x",
            "user_roles": [
                {
                    "allowed_networks": {
                        "allowed_cidrs": [
                            {
                                "cidr": "x"
                            }
                        ],
                        "allowed_cidrs_v6": [
                            {
                                "cidr": "x"
                            }
                        ]
                    },
                    "branches_only": true,
                    "expires_at": 1,
                    "role": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jit",
        "accessor": "Jit",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/database/jit",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "user_id": "x",
            "user_roles": [
                {
                    "allowed_networks": {
                        "allowed_cidrs": [
                            {
                                "cidr": "x"
                            }
                        ],
                        "allowed_cidrs_v6": [
                            {
                                "cidr": "x"
                            }
                        ]
                    },
                    "branches_only": true,
                    "expires_at": 1,
                    "role": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jit_access_response_output",
        "accessor": "JitAccessResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/jit/invite/accept",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "user_id": "x",
            "user_roles": [
                {
                    "allowed_networks": {
                        "allowed_cidrs": [
                            {
                                "cidr": "x"
                            }
                        ],
                        "allowed_cidrs_v6": [
                            {
                                "cidr": "x"
                            }
                        ]
                    },
                    "branches_only": true,
                    "expires_at": 1,
                    "role": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jit_list_access_response_output",
        "accessor": "JitListAccessResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/jit/list",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "primary_email": "x",
                    "user_id": "x",
                    "user_roles": [
                        {
                            "allowed_networks": {},
                            "branches_only": true,
                            "expires_at": 1,
                            "role": "x"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "legacy",
        "accessor": "Legacy",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/api-keys/legacy",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true
        },
        "idField": "id"
    },
    {
        "entity": "legacy",
        "accessor": "Legacy",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/api-keys/legacy",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "enabled": "true"
        },
        "headers": [],
        "query": [
            "enabled"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true
        },
        "idField": "id"
    },
    {
        "entity": "list_action_run_response_output",
        "accessor": "ListActionRunResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/actions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "limit": 20,
            "offset": 0
        },
        "headers": [],
        "query": [
            "offset",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "branch_id": "x",
                "run_steps": [
                    {
                        "name": "clone",
                        "status": "CREATED",
                        "created_at": "x",
                        "updated_at": "x"
                    }
                ],
                "workdir": "x",
                "check_run_id": 1,
                "created_at": "x",
                "updated_at": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "list_project_addons_response_output",
        "accessor": "ListProjectAddonsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/billing/addons",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "selected_addons": [
                {
                    "type": "custom_domain",
                    "variant": {
                        "id": "ci_micro",
                        "meta": "x",
                        "name": "x",
                        "price": {
                            "amount": 1,
                            "description": "x",
                            "interval": "monthly",
                            "type": "fixed"
                        }
                    }
                }
            ],
            "available_addons": [
                {
                    "name": "x",
                    "type": "custom_domain",
                    "variants": [
                        {
                            "id": "ci_micro",
                            "name": "x",
                            "price": {
                                "amount": 1,
                                "description": "x",
                                "interval": "monthly",
                                "type": "fixed"
                            }
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "list_providers_response_output",
        "accessor": "ListProvidersResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/sso/providers",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "created_at": "x",
                    "domains": [
                        {
                            "created_at": "x",
                            "domain": "x",
                            "updated_at": "x"
                        }
                    ],
                    "id": "x",
                    "saml": {
                        "attribute_mapping": {
                            "keys": {}
                        },
                        "entity_id": "x",
                        "metadata_url": "x",
                        "metadata_xml": "x",
                        "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
                    },
                    "updated_at": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "log",
        "accessor": "Log",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/analytics/endpoints/logs",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "iso_timestamp_end": "2025-03-01T23:59:59Z",
            "iso_timestamp_start": "2025-03-01T00:00:00Z",
            "sql": "select event_message from edge_logs limit 10"
        },
        "headers": [],
        "query": [
            "sql",
            "iso_timestamp_start",
            "iso_timestamp_end"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "result": [],
            "error": "x"
        },
        "idField": "id"
    },
    {
        "entity": "network_ban_response_enriched_output",
        "accessor": "NetworkBanResponseEnrichedOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/network-bans/retrieve/enriched",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "banned_ipv4_addresses": [
                {
                    "banned_address": "x",
                    "identifier": "x",
                    "type": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "network_ban_response_output",
        "accessor": "NetworkBanResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/network-bans/retrieve",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "banned_ipv4_addresses": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "network_restriction",
        "accessor": "NetworkRestriction",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/network-restrictions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "entitlement": "disallowed",
            "config": {
                "dbAllowedCidrs": [
                    "203.0.113.0/24"
                ],
                "dbAllowedCidrsV6": [
                    "2001:db8::/32"
                ]
            },
            "old_config": {
                "dbAllowedCidrs": [
                    "203.0.113.0/24"
                ],
                "dbAllowedCidrsV6": [
                    "2001:db8::/32"
                ]
            },
            "status": "stored",
            "updated_at": "2026-01-01T00:00:00Z",
            "applied_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "network_restriction",
        "accessor": "NetworkRestriction",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/network-restrictions",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "entitlement": "disallowed",
            "config": {
                "dbAllowedCidrs": [
                    {
                        "address": "x",
                        "type": "v4"
                    }
                ]
            },
            "old_config": {
                "dbAllowedCidrs": [
                    {
                        "address": "x",
                        "type": "v4"
                    }
                ]
            },
            "updated_at": "2026-01-01T00:00:00Z",
            "applied_at": "2026-01-01T00:00:00Z",
            "status": "stored"
        },
        "idField": "id"
    },
    {
        "entity": "network_restrictions_response_output",
        "accessor": "NetworkRestrictionsResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/network-restrictions/apply",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "entitlement": "disallowed",
            "config": {
                "dbAllowedCidrs": [
                    "203.0.113.0/24"
                ],
                "dbAllowedCidrsV6": [
                    "2001:db8::/32"
                ]
            },
            "old_config": {
                "dbAllowedCidrs": [
                    "203.0.113.0/24"
                ],
                "dbAllowedCidrsV6": [
                    "2001:db8::/32"
                ]
            },
            "status": "stored",
            "updated_at": "2026-01-01T00:00:00Z",
            "applied_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "o_auth",
        "accessor": "OAuth",
        "op": "create",
        "method": "POST",
        "path": "/v1/oauth/revoke",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "o_auth",
        "accessor": "OAuth",
        "op": "load",
        "method": "GET",
        "path": "/v1/oauth/authorize",
        "args": [],
        "select": {
            "client_id": "66666666-6666-4666-8666-666666666666",
            "code_challenge": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ",
            "code_challenge_method": "S256",
            "organization_slug": "tsrqponmlkjihgfedcba",
            "redirect_uri": "https://app.acme.com/auth/callback",
            "resource": "https://mcp.supabase.com/projects",
            "response_mode": "query",
            "response_type": "code",
            "scope": "projects:read projects:write",
            "state": "st_9f4d3a206b2e4a7e8c91",
            "target_flow": "v1"
        },
        "headers": [],
        "query": [
            "client_id",
            "response_type",
            "redirect_uri",
            "scope",
            "state",
            "response_mode",
            "code_challenge",
            "code_challenge_method",
            "organization_slug",
            "target_flow",
            "resource"
        ],
        "auth": [],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "o_auth",
        "accessor": "OAuth",
        "op": "load",
        "method": "GET",
        "path": "/v1/oauth/authorize/project-claim",
        "args": [],
        "select": {
            "client_id": "66666666-6666-4666-8666-666666666666",
            "code_challenge": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ",
            "code_challenge_method": "S256",
            "project_ref": "abcdefghijklmnopqrst",
            "redirect_uri": "https://app.acme.com/auth/callback",
            "response_mode": "query",
            "response_type": "code",
            "state": "st_9f4d3a206b2e4a7e8c91"
        },
        "headers": [],
        "query": [
            "project_ref",
            "client_id",
            "response_type",
            "redirect_uri",
            "state",
            "response_mode",
            "code_challenge",
            "code_challenge_method"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "o_auth_token_response_output",
        "accessor": "OAuthTokenResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/oauth/token",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 200,
        "sample": {
            "access_token": "x",
            "refresh_token": "x",
            "expires_in": 1,
            "token_type": "Bearer"
        },
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "create",
        "method": "POST",
        "path": "/v1/organizations/{slug}/project-claim/{token}",
        "args": [
            {
                "name": "organization_id",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            },
            {
                "name": "token",
                "wire": "token",
                "value": "0123456789abcdef0123456789abcdef01234567"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "organization_project_claim_response_output",
        "accessor": "OrganizationProjectClaimResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/organizations/{slug}/project-claim/{token}",
        "args": [
            {
                "name": "organization_id",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            },
            {
                "name": "token",
                "wire": "token",
                "value": "0123456789abcdef0123456789abcdef01234567"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project": {
                "ref": "x",
                "name": "x"
            },
            "preview": {
                "valid": true,
                "warnings": [
                    {
                        "key": "x",
                        "message": "x"
                    }
                ],
                "errors": [
                    {
                        "key": "x",
                        "message": "x"
                    }
                ],
                "info": [
                    {
                        "key": "x",
                        "message": "x"
                    }
                ],
                "members_exceeding_free_project_limit": [
                    {
                        "name": "x",
                        "limit": 1
                    }
                ],
                "source_subscription_plan": "free",
                "target_subscription_plan": "free"
            },
            "expires_at": "x",
            "created_at": "x",
            "created_by": "x"
        },
        "idField": "id"
    },
    {
        "entity": "organization_projects_response_output",
        "accessor": "OrganizationProjectsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/organizations/{slug}/projects",
        "args": [
            {
                "name": "slug",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            }
        ],
        "select": {
            "limit": 20,
            "offset": 0,
            "search": "acme",
            "sort": "created_desc",
            "status": "v1"
        },
        "headers": [],
        "query": [
            "offset",
            "limit",
            "search",
            "sort",
            "statuses"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "projects": [
                {
                    "cloud_provider": "x",
                    "databases": [
                        {
                            "cloud_provider": "x",
                            "disk_last_modified_at": "x",
                            "disk_throughput_mbps": 1,
                            "disk_type": "gp3",
                            "disk_volume_size_gb": 1,
                            "identifier": "x",
                            "infra_compute_size": "pico",
                            "region": "x",
                            "status": "ACTIVE_HEALTHY",
                            "type": "PRIMARY"
                        }
                    ],
                    "inserted_at": "x",
                    "is_branch": true,
                    "name": "x",
                    "ref": "x",
                    "region": "x",
                    "status": "INACTIVE"
                }
            ],
            "pagination": {
                "count": 1,
                "limit": 1,
                "offset": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "performance",
        "accessor": "Performance",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/advisors/performance",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "lints": [
                {
                    "cache_key": "x",
                    "categories": [
                        "PERFORMANCE"
                    ],
                    "description": "x",
                    "detail": "x",
                    "facing": "EXTERNAL",
                    "level": "ERROR",
                    "metadata": {
                        "entity": "x",
                        "fkey_columns": [
                            1
                        ],
                        "fkey_name": "x",
                        "name": "x",
                        "schema": "x",
                        "type": "table"
                    },
                    "name": "unindexed_foreign_keys",
                    "observed_at": "2026-01-01T00:00:00Z",
                    "remediation": "x",
                    "title": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "pgsodium",
        "accessor": "Pgsodium",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/pgsodium",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
        },
        "idField": "id"
    },
    {
        "entity": "pgsodium",
        "accessor": "Pgsodium",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/pgsodium",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "root_key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
        },
        "idField": "id"
    },
    {
        "entity": "postgre",
        "accessor": "Postgre",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/database/postgres",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "effective_cache_size": "x",
            "logical_decoding_work_mem": "x",
            "cron.log_statement": true,
            "log_autovacuum_min_duration": "x",
            "log_checkpoints": true,
            "log_connections": true,
            "log_disconnections": true,
            "log_duration": true,
            "log_lock_waits": true,
            "log_recovery_conflict_waits": true,
            "log_replication_commands": true,
            "log_startup_progress_interval": "x",
            "log_temp_files": "x",
            "maintenance_work_mem": "x",
            "track_activity_query_size": "x",
            "max_connections": 1,
            "max_locks_per_transaction": 1,
            "max_logical_replication_workers": 1,
            "max_parallel_maintenance_workers": 1,
            "max_parallel_workers": 1,
            "max_parallel_workers_per_gather": 1,
            "max_replication_slots": 1,
            "max_slot_wal_keep_size": "x",
            "max_standby_archive_delay": "x",
            "max_standby_streaming_delay": "x",
            "max_sync_workers_per_subscription": 1,
            "max_wal_size": "x",
            "max_wal_senders": 1,
            "max_worker_processes": 1,
            "session_replication_role": "origin",
            "shared_buffers": "x",
            "statement_timeout": "x",
            "track_commit_timestamp": true,
            "wal_keep_size": "x",
            "wal_sender_timeout": "x",
            "work_mem": "x",
            "checkpoint_timeout": "x",
            "hot_standby_feedback": true
        },
        "idField": "id"
    },
    {
        "entity": "postgre",
        "accessor": "Postgre",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/config/database/postgres",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "effective_cache_size": "x",
            "logical_decoding_work_mem": "x",
            "cron.log_statement": true,
            "log_autovacuum_min_duration": "x",
            "log_checkpoints": true,
            "log_connections": true,
            "log_disconnections": true,
            "log_duration": true,
            "log_lock_waits": true,
            "log_recovery_conflict_waits": true,
            "log_replication_commands": true,
            "log_startup_progress_interval": "x",
            "log_temp_files": "x",
            "maintenance_work_mem": "x",
            "track_activity_query_size": "x",
            "max_connections": 1,
            "max_locks_per_transaction": 1,
            "max_logical_replication_workers": 1,
            "max_parallel_maintenance_workers": 1,
            "max_parallel_workers": 1,
            "max_parallel_workers_per_gather": 1,
            "max_replication_slots": 1,
            "max_slot_wal_keep_size": "x",
            "max_standby_archive_delay": "x",
            "max_standby_streaming_delay": "x",
            "max_sync_workers_per_subscription": 1,
            "max_wal_size": "x",
            "max_wal_senders": 1,
            "max_worker_processes": 1,
            "session_replication_role": "origin",
            "shared_buffers": "x",
            "statement_timeout": "x",
            "track_commit_timestamp": true,
            "wal_keep_size": "x",
            "wal_sender_timeout": "x",
            "work_mem": "x",
            "checkpoint_timeout": "x",
            "hot_standby_feedback": true
        },
        "idField": "id"
    },
    {
        "entity": "postgrest",
        "accessor": "Postgrest",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/postgrest",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "db_schema": "x",
            "max_rows": 1,
            "db_extra_search_path": "x",
            "db_pool": 1,
            "db_pool_acquisition_timeout": 1,
            "jwt_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/disk",
        "action": "config_disk",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/restore",
        "action": "restore",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/restore/cancel",
        "action": "restore_cancel",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/network-bans",
        "action": "network_ban",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project_available_restore_versions_response_output",
        "accessor": "ProjectAvailableRestoreVersionsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/restore",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "available_versions": [
                {
                    "postgres_engine": "13",
                    "release_channel": "internal",
                    "version": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project_claim_token_response_output",
        "accessor": "ProjectClaimTokenResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/claim-token",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token_alias": "x",
            "expires_at": "x",
            "created_at": "x",
            "created_by": "x"
        },
        "idField": "id"
    },
    {
        "entity": "project_upgrade_eligibility_response_output",
        "accessor": "ProjectUpgradeEligibilityResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/upgrade/eligibility",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "eligible": true,
            "current_app_version": "x",
            "current_app_version_release_channel": "internal",
            "latest_app_version": "x",
            "target_upgrade_versions": [
                {
                    "app_version": "x",
                    "postgres_version": "13",
                    "release_channel": "internal"
                }
            ],
            "duration_estimate_hours": 1,
            "legacy_auth_custom_roles": [
                "x"
            ],
            "objects_to_be_dropped": [
                "x"
            ],
            "unsupported_extensions": [
                "x"
            ],
            "user_defined_objects_in_internal_schemas": [
                "x"
            ],
            "validation_errors": [
                {
                    "dependents": [
                        "x"
                    ],
                    "type": "objects_depending_on_pg_cron"
                }
            ],
            "warnings": [
                {
                    "type": "pg_graphql_introspection_change"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project_upgrade_initiate_response_output",
        "accessor": "ProjectUpgradeInitiateResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/upgrade",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "tracking_id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
        "args": [
            {
                "name": "id",
                "wire": "provider_id",
                "value": "77777777-7777-4777-8777-777777777777"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "saml": {
                "entity_id": "x",
                "metadata_url": "x",
                "metadata_xml": "x",
                "attribute_mapping": {
                    "keys": {}
                },
                "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
            },
            "domains": [
                {
                    "domain": "x",
                    "created_at": "x",
                    "updated_at": "x"
                }
            ],
            "created_at": "x",
            "updated_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
        "args": [
            {
                "name": "id",
                "wire": "provider_id",
                "value": "77777777-7777-4777-8777-777777777777"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "saml": {
                "entity_id": "x",
                "metadata_url": "x",
                "metadata_xml": "x",
                "attribute_mapping": {
                    "keys": {}
                },
                "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
            },
            "domains": [
                {
                    "domain": "x",
                    "created_at": "x",
                    "updated_at": "x"
                }
            ],
            "created_at": "x",
            "updated_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "read_only_status_response_output",
        "accessor": "ReadOnlyStatusResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/readonly",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "override_enabled": true,
            "override_active_until": "x"
        },
        "idField": "id"
    },
    {
        "entity": "realtime",
        "accessor": "Realtime",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/realtime/shutdown",
        "action": "shutdown",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "realtime",
        "accessor": "Realtime",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/realtime",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "private_only": true,
            "connection_pool": 1,
            "postgres_changes_pool": 1,
            "max_concurrent_users": 1,
            "max_events_per_second": 1,
            "max_bytes_per_second": 1,
            "max_channels_per_client": 1,
            "max_joins_per_second": 1,
            "max_presence_events_per_second": 1,
            "max_payload_size_in_kb": 1,
            "suspend": true,
            "presence_enabled": true,
            "admin_suspended_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "realtime",
        "accessor": "Realtime",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/config/realtime",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "regions_info_output",
        "accessor": "RegionsInfoOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/available-regions",
        "args": [],
        "select": {
            "continent": "NA",
            "desired_instance_size": "v1",
            "organization_slug": "tsrqponmlkjihgfedcba"
        },
        "headers": [],
        "query": [
            "organization_slug",
            "continent",
            "desired_instance_size"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "recommendations": {
                "smartGroup": {
                    "code": "americas",
                    "name": "x",
                    "type": "smartGroup"
                },
                "specific": [
                    {
                        "code": "us-east-1",
                        "name": "x",
                        "provider": "AWS",
                        "status": "capacity",
                        "type": "specific"
                    }
                ]
            },
            "all": {
                "smartGroup": [
                    {
                        "code": "americas",
                        "name": "x",
                        "type": "smartGroup"
                    }
                ],
                "specific": [
                    {
                        "code": "us-east-1",
                        "name": "x",
                        "provider": "AWS",
                        "status": "capacity",
                        "type": "specific"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "roles_response_output",
        "accessor": "RolesResponseOutput",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/cli/login-role",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "message": "ok"
        },
        "idField": "id"
    },
    {
        "entity": "secret",
        "accessor": "Secret",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/secrets",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "secret",
        "accessor": "Secret",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/secrets",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "name": "x",
                "value": "x",
                "updated_at": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "secret",
        "accessor": "Secret",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/secrets",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "security",
        "accessor": "Security",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/advisors/security",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "lint_type": "sql"
        },
        "headers": [],
        "query": [
            "lint_type"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "lints": [
                {
                    "cache_key": "x",
                    "categories": [
                        "PERFORMANCE"
                    ],
                    "description": "x",
                    "detail": "x",
                    "facing": "EXTERNAL",
                    "level": "ERROR",
                    "metadata": {
                        "entity": "x",
                        "fkey_columns": [
                            1
                        ],
                        "fkey_name": "x",
                        "name": "x",
                        "schema": "x",
                        "type": "table"
                    },
                    "name": "unindexed_foreign_keys",
                    "observed_at": "2026-01-01T00:00:00Z",
                    "remediation": "x",
                    "title": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "signing_key",
        "accessor": "SigningKey",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/auth/signing-keys",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "signing_key",
        "accessor": "SigningKey",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/signing-keys",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "keys": [
                {
                    "algorithm": "EdDSA",
                    "created_at": "2026-01-01T00:00:00Z",
                    "id": "x",
                    "status": "in_use",
                    "updated_at": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "signing_key",
        "accessor": "SigningKey",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "33333333-3333-4333-8333-333333333333"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "signing_key",
        "accessor": "SigningKey",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "33333333-3333-4333-8333-333333333333"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "signing_key",
        "accessor": "SigningKey",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "33333333-3333-4333-8333-333333333333"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "signing_key_response_output",
        "accessor": "SigningKeyResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/auth/signing-keys/legacy",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "signing_key_response_output",
        "accessor": "SigningKeyResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/signing-keys/legacy",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "algorithm": "EdDSA",
            "status": "in_use",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "snippet",
        "accessor": "Snippet",
        "op": "list",
        "method": "GET",
        "path": "/v1/snippets",
        "args": [],
        "select": {
            "cursor": "v1",
            "limit": "v1",
            "project_ref": "abcdefghijklmnopqrst",
            "sort_by": "v1",
            "sort_order": "v1"
        },
        "headers": [],
        "query": [
            "project_ref",
            "cursor",
            "limit",
            "sort_by",
            "sort_order"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "description": "x",
                    "favorite": true,
                    "id": "x",
                    "inserted_at": "x",
                    "name": "x",
                    "owner": {
                        "id": 1,
                        "username": "x"
                    },
                    "project": {
                        "id": 1,
                        "name": "x"
                    },
                    "type": "sql",
                    "updated_at": "x",
                    "updated_by": {
                        "id": 1,
                        "username": "x"
                    },
                    "visibility": "user"
                }
            ],
            "cursor": "x"
        },
        "idField": "id"
    },
    {
        "entity": "snippet",
        "accessor": "Snippet",
        "op": "load",
        "method": "GET",
        "path": "/v1/snippets/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "44444444-4444-4444-8444-444444444444"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "inserted_at": "x",
            "updated_at": "x",
            "type": "sql",
            "visibility": "user",
            "name": "x",
            "description": "x",
            "project": {
                "id": 1,
                "name": "x"
            },
            "owner": {
                "id": 1,
                "username": "x"
            },
            "updated_by": {
                "id": 1,
                "username": "x"
            },
            "favorite": true,
            "content": {
                "favorite": true,
                "schema_version": "x",
                "sql": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "ssl_enforcement",
        "accessor": "SslEnforcement",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/ssl-enforcement",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "currentConfig": {
                "database": true
            },
            "appliedSuccessfully": true
        },
        "idField": "id"
    },
    {
        "entity": "ssl_enforcement",
        "accessor": "SslEnforcement",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/ssl-enforcement",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "currentConfig": {
                "database": true
            },
            "appliedSuccessfully": true
        },
        "idField": "id"
    },
    {
        "entity": "storage",
        "accessor": "Storage",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/storage",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "fileSizeLimit": 1,
            "features": {
                "icebergCatalog": {
                    "enabled": true,
                    "maxCatalogs": 1,
                    "maxNamespaces": 1,
                    "maxTables": 1
                },
                "imageTransformation": {
                    "enabled": true
                },
                "purgeCache": {
                    "enabled": true
                },
                "s3Protocol": {
                    "enabled": true
                },
                "vectorBuckets": {
                    "enabled": true,
                    "maxBuckets": 1,
                    "maxIndexes": 1
                }
            },
            "capabilities": {
                "iceberg_catalog": true,
                "list_v2": true,
                "object_versioning": true
            },
            "external": {
                "upstreamTarget": "main"
            },
            "migrationVersion": "x"
        },
        "idField": "id"
    },
    {
        "entity": "storage",
        "accessor": "Storage",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/config/storage",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "streamable_file",
        "accessor": "StreamableFile",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/functions/{function_slug}/body",
        "args": [
            {
                "name": "function_slug",
                "wire": "function_slug",
                "value": "hello-world"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "subdomain_availability_response_output",
        "accessor": "SubdomainAvailabilityResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/vanity-subdomain/check-availability",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "available": true
        },
        "idField": "id"
    },
    {
        "entity": "supavisor_config_response_output",
        "accessor": "SupavisorConfigResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/database/pooler",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "identifier": "x",
                "database_type": "PRIMARY",
                "is_using_scram_auth": true,
                "db_user": "x",
                "db_host": "x",
                "db_port": 1,
                "db_name": "x",
                "connection_string": "x",
                "connectionString": "x",
                "default_pool_size": 1,
                "max_client_conn": 1,
                "pool_mode": "transaction"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "third_party_auth",
        "accessor": "ThirdPartyAuth",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/config/auth/third-party-auth",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "type": "x",
            "oidc_issuer_url": "x",
            "jwks_url": "x",
            "inserted_at": "x",
            "updated_at": "x",
            "resolved_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "third_party_auth",
        "accessor": "ThirdPartyAuth",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/third-party-auth",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "type": "x",
                "oidc_issuer_url": "x",
                "jwks_url": "x",
                "inserted_at": "x",
                "updated_at": "x",
                "resolved_at": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "third_party_auth",
        "accessor": "ThirdPartyAuth",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}",
        "args": [
            {
                "name": "id",
                "wire": "tpa_id",
                "value": "88888888-8888-4888-8888-888888888888"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "type": "x",
            "oidc_issuer_url": "x",
            "jwks_url": "x",
            "inserted_at": "x",
            "updated_at": "x",
            "resolved_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "third_party_auth",
        "accessor": "ThirdPartyAuth",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}",
        "args": [
            {
                "name": "id",
                "wire": "tpa_id",
                "value": "88888888-8888-4888-8888-888888888888"
            },
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "type": "x",
            "oidc_issuer_url": "x",
            "jwks_url": "x",
            "inserted_at": "x",
            "updated_at": "x",
            "resolved_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "typescript",
        "accessor": "Typescript",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/types/typescript",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "included_schema": "v1"
        },
        "headers": [],
        "query": [
            "included_schemas"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "types": "x"
        },
        "idField": "id"
    },
    {
        "entity": "update_custom_hostname_response_output",
        "accessor": "UpdateCustomHostnameResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/custom-hostname",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "status": "1_not_started",
            "custom_hostname": "x",
            "data": {
                "errors": [
                    "x"
                ],
                "messages": [
                    "x"
                ],
                "result": {
                    "custom_origin_server": "x",
                    "hostname": "x",
                    "id": "x",
                    "ownership_verification": {
                        "name": "x",
                        "type": "x",
                        "value": "x"
                    },
                    "ssl": {
                        "status": "x",
                        "validation_errors": [
                            {
                                "message": "x"
                            }
                        ],
                        "validation_records": [
                            {
                                "txt_name": "x",
                                "txt_value": "x"
                            }
                        ]
                    },
                    "status": "x",
                    "verification_errors": [
                        "x"
                    ]
                },
                "success": true
            }
        },
        "idField": "id"
    },
    {
        "entity": "update_provider_response_output",
        "accessor": "UpdateProviderResponseOutput",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            },
            {
                "name": "provider_id",
                "wire": "provider_id",
                "value": "77777777-7777-4777-8777-777777777777"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "saml": {
                "entity_id": "x",
                "metadata_url": "x",
                "metadata_xml": "x",
                "attribute_mapping": {
                    "keys": {}
                },
                "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
            },
            "domains": [
                {
                    "domain": "x",
                    "created_at": "x",
                    "updated_at": "x"
                }
            ],
            "created_at": "x",
            "updated_at": "x"
        },
        "idField": "id"
    },
    {
        "entity": "update_supavisor_config_response_output",
        "accessor": "UpdateSupavisorConfigResponseOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/config/database/pooler",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "default_pool_size": 1,
            "pool_mode": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_backup_schedule_response_output",
        "accessor": "V1BackupScheduleResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/backups/schedule",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "schedule_for": "04:00:00",
            "updated_at": "2026-05-04T14:40:44+00:00"
        },
        "idField": "id"
    },
    {
        "entity": "v1_backup_schedule_response_output",
        "accessor": "V1BackupScheduleResponseOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/database/backups/schedule",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "schedule_for": "04:00:00",
            "updated_at": "2026-05-04T14:40:44+00:00"
        },
        "idField": "id"
    },
    {
        "entity": "v1_backups_response_output",
        "accessor": "V1BackupsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/backups",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "region": "x",
            "walg_enabled": true,
            "pitr_enabled": true,
            "backups": [
                {
                    "id": 1,
                    "inserted_at": "x",
                    "is_physical_backup": true,
                    "status": "COMPLETED"
                }
            ],
            "physical_backup_data": {
                "earliest_physical_backup_date_unix": 1,
                "latest_physical_backup_date_unix": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "v1_get_migration_response_output",
        "accessor": "V1GetMigrationResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/migrations/{version}",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            },
            {
                "name": "version",
                "wire": "version",
                "value": "20250312000000"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "version": "x",
            "name": "x",
            "statements": [
                "x"
            ],
            "rollback": [
                "x"
            ],
            "created_by": "x",
            "idempotency_key": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_get_usage_api_count_response_output",
        "accessor": "V1GetUsageApiCountResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/analytics/endpoints/usage.api-counts",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "interval": "1day"
        },
        "headers": [],
        "query": [
            "interval"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "result": [
                {
                    "timestamp": "2026-01-01T00:00:00Z",
                    "total_auth_requests": 1,
                    "total_realtime_requests": 1,
                    "total_rest_requests": 1,
                    "total_storage_requests": 1
                }
            ],
            "error": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_get_usage_api_requests_count_response_output",
        "accessor": "V1GetUsageApiRequestsCountResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/analytics/endpoints/usage.api-requests-count",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "result": [
                {
                    "count": 1
                }
            ],
            "error": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_list_entitlements_response_output",
        "accessor": "V1ListEntitlementsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/organizations/{slug}/entitlements",
        "args": [
            {
                "name": "slug",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "entitlements": [
                {
                    "config": {
                        "enabled": true
                    },
                    "feature": {
                        "key": "instances.compute_update_available_sizes",
                        "type": "boolean"
                    },
                    "hasAccess": true,
                    "type": "boolean"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "v1_list_migrations_response_output",
        "accessor": "V1ListMigrationsResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/migrations",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "version": "x",
                "name": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_organization_member_response_output",
        "accessor": "V1OrganizationMemberResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/organizations/{slug}/members",
        "args": [
            {
                "name": "slug",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "user_id": "x",
                "user_name": "x",
                "email": "x",
                "role_name": "x",
                "mfa_enabled": true,
                "avatar_url": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_organization_slug_response_output",
        "accessor": "V1OrganizationSlugResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/organizations",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "slug": "tsrqponmlkjihgfedcba",
            "name": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_organization_slug_response_output",
        "accessor": "V1OrganizationSlugResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/organizations",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "slug": "tsrqponmlkjihgfedcba",
                "name": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_organization_slug_response_output",
        "accessor": "V1OrganizationSlugResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/organizations/{slug}",
        "args": [
            {
                "name": "slug",
                "wire": "slug",
                "value": "tsrqponmlkjihgfedcba"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "name": "x",
            "plan": "free",
            "opt_in_tags": [
                "AI_SQL_GENERATOR_OPT_IN"
            ],
            "allowed_release_channels": [
                "internal"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "v1_pgbouncer_config_response_output",
        "accessor": "V1PgbouncerConfigResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/config/database/pgbouncer",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [],
        "status": 200,
        "sample": {
            "default_pool_size": 1,
            "ignore_startup_parameters": "x",
            "max_client_conn": 1,
            "pool_mode": "transaction",
            "connection_string": "x",
            "server_idle_timeout": 1,
            "server_lifetime": 1,
            "query_wait_timeout": 1,
            "reserve_pool_size": 1
        },
        "idField": "id"
    },
    {
        "entity": "v1_profile_response_output",
        "accessor": "V1ProfileResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/profile",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "gotrue_id": "x",
            "primary_email": "x",
            "username": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_ref_response_output",
        "accessor": "V1ProjectRefResponseOutput",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 1,
            "ref": "x",
            "name": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_ref_response_output",
        "accessor": "V1ProjectRefResponseOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 1,
            "ref": "x",
            "name": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/claim-token",
        "action": "claim_token",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token": "x",
            "token_alias": "x",
            "expires_at": "x",
            "created_at": "x",
            "created_by": "x"
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/pause",
        "action": "pause",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/restart",
        "action": "restart",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "ref": "abcdefghijklmnopqrst",
            "organization_id": "x",
            "organization_slug": "tsrqponmlkjihgfedcba",
            "name": "x",
            "region": "x",
            "created_at": "x",
            "status": "INACTIVE"
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "ref": "abcdefghijklmnopqrst",
                "organization_id": "x",
                "organization_slug": "tsrqponmlkjihgfedcba",
                "name": "x",
                "region": "x",
                "created_at": "x",
                "status": "INACTIVE",
                "database": {
                    "host": "x",
                    "version": "x",
                    "postgres_engine": "x",
                    "release_channel": "x"
                }
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "ref": "abcdefghijklmnopqrst",
            "organization_id": "x",
            "organization_slug": "tsrqponmlkjihgfedcba",
            "name": "x",
            "region": "x",
            "created_at": "x",
            "status": "INACTIVE",
            "database": {
                "host": "x",
                "version": "x",
                "postgres_engine": "x",
                "release_channel": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "remove",
        "method": "DELETE",
        "path": "/v1/projects/{ref}/claim-token",
        "action": "claim_token",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "update",
        "method": "PUT",
        "path": "/v1/projects/{ref}/jit-access",
        "action": "jit_access",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "state": "enabled",
            "appliedSuccessfully": true
        },
        "idField": "id"
    },
    {
        "entity": "v1_project_with_database_response_output",
        "accessor": "V1ProjectWithDatabaseResponseOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/postgrest",
        "action": "postgrest",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "db_schema": "x",
            "max_rows": 1,
            "db_extra_search_path": "x",
            "db_pool": 1,
            "db_pool_acquisition_timeout": 1
        },
        "idField": "id"
    },
    {
        "entity": "v1_restore_point",
        "accessor": "V1RestorePoint",
        "op": "create",
        "method": "POST",
        "path": "/v1/projects/{ref}/database/backups/restore-point",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "name": "x",
            "status": "AVAILABLE",
            "completed_on": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "v1_restore_point",
        "accessor": "V1RestorePoint",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/database/backups/restore-point",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "name": "v1"
        },
        "headers": [],
        "query": [
            "name"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x",
            "status": "AVAILABLE",
            "completed_on": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "v1_service_health_response_output",
        "accessor": "V1ServiceHealthResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/health",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {
            "service": "v1",
            "timeout_m": "v1"
        },
        "headers": [],
        "query": [
            "services",
            "timeout_ms"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "name": "auth",
                "healthy": true,
                "status": "COMING_UP",
                "info": {
                    "name": "GoTrue",
                    "version": "x",
                    "description": "x"
                },
                "error": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_storage_bucket_response_output",
        "accessor": "V1StorageBucketResponseOutput",
        "op": "list",
        "method": "GET",
        "path": "/v1/projects/{ref}/storage/buckets",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": "x",
                "name": "x",
                "owner": "x",
                "created_at": "x",
                "updated_at": "x",
                "public": true
            }
        ],
        "idField": "id"
    },
    {
        "entity": "v1_update_password_response_output",
        "accessor": "V1UpdatePasswordResponseOutput",
        "op": "update",
        "method": "PATCH",
        "path": "/v1/projects/{ref}/database/password",
        "args": [
            {
                "name": "project_id",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "message": "x"
        },
        "idField": "id"
    },
    {
        "entity": "vanity_subdomain",
        "accessor": "VanitySubdomain",
        "op": "load",
        "method": "GET",
        "path": "/v1/projects/{ref}/vanity-subdomain",
        "args": [
            {
                "name": "ref",
                "wire": "ref",
                "value": "abcdefghijklmnopqrst"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "status": "not-used",
            "custom_domain": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map