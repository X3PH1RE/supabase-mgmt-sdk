
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'SupabaseMgmt',
        slug: "supabase-mgmt",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://api.supabase.com",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        action: {
        },
  
        activate: {
        },
  
        analytics: {
        },
  
        api_key: {
        },
  
        auth: {
        },
  
        billing: {
        },
  
        branch: {
        },
  
        branch_update_response_output: {
        },
  
        bulk_update_function_response_output: {
        },
  
        create_provider_response_output: {
        },
  
        create_role_response_output: {
        },
  
        database: {
        },
  
        database_upgrade_status_response_output: {
        },
  
        deploy: {
        },
  
        disk: {
        },
  
        disk_autoscale_config_output: {
        },
  
        disk_util_metrics_response_output: {
        },
  
        domain: {
        },
  
        edge_function: {
        },
  
        environment: {
        },
  
        function: {
        },
  
        functionscombined_stat: {
        },
  
        invite: {
        },
  
        jit: {
        },
  
        jit_access_response_output: {
        },
  
        jit_list_access_response_output: {
        },
  
        legacy: {
        },
  
        list_action_run_response_output: {
        },
  
        list_project_addons_response_output: {
        },
  
        list_providers_response_output: {
        },
  
        log: {
        },
  
        network_ban_response_enriched_output: {
        },
  
        network_ban_response_output: {
        },
  
        network_restriction: {
        },
  
        network_restrictions_response_output: {
        },
  
        o_auth: {
        },
  
        o_auth_token_response_output: {
        },
  
        organization: {
        },
  
        organization_project_claim_response_output: {
        },
  
        organization_projects_response_output: {
        },
  
        performance: {
        },
  
        pgsodium: {
        },
  
        postgre: {
        },
  
        postgrest: {
        },
  
        project: {
        },
  
        project_available_restore_versions_response_output: {
        },
  
        project_claim_token_response_output: {
        },
  
        project_upgrade_eligibility_response_output: {
        },
  
        project_upgrade_initiate_response_output: {
        },
  
        provider: {
        },
  
        read_only_status_response_output: {
        },
  
        realtime: {
        },
  
        regions_info_output: {
        },
  
        roles_response_output: {
        },
  
        secret: {
        },
  
        security: {
        },
  
        signing_key: {
        },
  
        signing_key_response_output: {
        },
  
        snippet: {
        },
  
        ssl_enforcement: {
        },
  
        storage: {
        },
  
        streamable_file: {
        },
  
        subdomain_availability_response_output: {
        },
  
        supavisor_config_response_output: {
        },
  
        third_party_auth: {
        },
  
        typescript: {
        },
  
        update_custom_hostname_response_output: {
        },
  
        update_provider_response_output: {
        },
  
        update_supavisor_config_response_output: {
        },
  
        v1_backup_schedule_response_output: {
        },
  
        v1_backups_response_output: {
        },
  
        v1_get_migration_response_output: {
        },
  
        v1_get_usage_api_count_response_output: {
        },
  
        v1_get_usage_api_requests_count_response_output: {
        },
  
        v1_list_entitlements_response_output: {
        },
  
        v1_list_migrations_response_output: {
        },
  
        v1_organization_member_response_output: {
        },
  
        v1_organization_slug_response_output: {
        },
  
        v1_pgbouncer_config_response_output: {
        },
  
        v1_profile_response_output: {
        },
  
        v1_project_ref_response_output: {
        },
  
        v1_project_with_database_response_output: {
        },
  
        v1_restore_point: {
        },
  
        v1_service_health_response_output: {
        },
  
        v1_storage_bucket_response_output: {
        },
  
        v1_update_password_response_output: {
        },
  
        vanity_subdomain: {
        },
  
    }
  }


  entity = {
    "action": {
      "fields": [
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "check_run_id",
          "title": "Check Run Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "git_config",
          "title": "Git Config",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "run_steps",
          "title": "Run Steps",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "workdir",
          "title": "Workdir",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "action",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/actions/{run_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "actions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id",
                  "run_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "run_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/actions/{run_id}/status",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "status"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "actions",
                "{id}",
                "status"
              ],
              "rename": {
                "param": {
                  "ref": "project_id",
                  "run_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "run_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "status",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "activate": {
      "fields": [
        {
          "name": "vanity_subdomain",
          "title": "Vanity Subdomain",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "activate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/vanity-subdomain/activate",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "vanity-subdomain"
                },
                {
                  "lit": "activate"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "vanity-subdomain",
                "activate"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "analytics": {
      "fields": [],
      "name": "analytics",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/logs.all",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "logs.all"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "logs.all"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/metrics",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "metrics"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "metrics"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "api_key": {
      "fields": [
        {
          "name": "api_key",
          "title": "Api Key",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`"
        },
        {
          "name": "hash",
          "title": "Hash",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "inserted_at",
          "title": "Inserted At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "prefix",
          "title": "Prefix",
          "type": "`$STRING`"
        },
        {
          "name": "secret_jwt_template",
          "title": "Secret Jwt Template",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/api-keys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "reveal",
                    "orig": "reveal",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref",
                  "reveal"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/api-keys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "reveal",
                    "orig": "reveal",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref",
                  "reveal"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/api-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "22222222-2222-4222-8222-222222222222"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "reveal",
                    "orig": "reveal",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id",
                  "reveal"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/api-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "22222222-2222-4222-8222-222222222222"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "reason",
                    "orig": "reason",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "rotating_key"
                  },
                  {
                    "name": "reveal",
                    "orig": "reveal",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": true
                  },
                  {
                    "name": "was_compromised",
                    "orig": "was_compromised",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": false
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id",
                  "reason",
                  "reveal",
                  "was_compromised"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/api-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "22222222-2222-4222-8222-222222222222"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "reveal",
                    "orig": "reveal",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id",
                  "reveal"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "auth": {
      "fields": [
        {
          "name": "api_max_request_duration",
          "title": "Api Max Request Duration",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "custom_oauth_enabled",
          "title": "Custom Oauth Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "custom_oauth_max_providers",
          "title": "Custom Oauth Max Providers",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "db_max_pool_size",
          "title": "Db Max Pool Size",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "db_max_pool_size_unit",
          "title": "Db Max Pool Size Unit",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "disable_signup",
          "title": "Disable Signup",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_anonymous_users_enabled",
          "title": "External Anonymous Users Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_apple_additional_client_ids",
          "title": "External Apple Additional Client Ids",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_apple_client_id",
          "title": "External Apple Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_apple_email_optional",
          "title": "External Apple Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_apple_enabled",
          "title": "External Apple Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_apple_secret",
          "title": "External Apple Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_azure_client_id",
          "title": "External Azure Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_azure_email_optional",
          "title": "External Azure Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_azure_enabled",
          "title": "External Azure Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_azure_secret",
          "title": "External Azure Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_azure_url",
          "title": "External Azure Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_bitbucket_client_id",
          "title": "External Bitbucket Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_bitbucket_email_optional",
          "title": "External Bitbucket Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_bitbucket_enabled",
          "title": "External Bitbucket Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_bitbucket_secret",
          "title": "External Bitbucket Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_discord_client_id",
          "title": "External Discord Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_discord_email_optional",
          "title": "External Discord Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_discord_enabled",
          "title": "External Discord Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_discord_secret",
          "title": "External Discord Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_email_enabled",
          "title": "External Email Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_facebook_client_id",
          "title": "External Facebook Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_facebook_email_optional",
          "title": "External Facebook Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_facebook_enabled",
          "title": "External Facebook Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_facebook_secret",
          "title": "External Facebook Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_figma_client_id",
          "title": "External Figma Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_figma_email_optional",
          "title": "External Figma Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_figma_enabled",
          "title": "External Figma Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_figma_secret",
          "title": "External Figma Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_github_client_id",
          "title": "External Github Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_github_email_optional",
          "title": "External Github Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_github_enabled",
          "title": "External Github Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_github_secret",
          "title": "External Github Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_gitlab_client_id",
          "title": "External Gitlab Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_gitlab_email_optional",
          "title": "External Gitlab Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_gitlab_enabled",
          "title": "External Gitlab Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_gitlab_secret",
          "title": "External Gitlab Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_gitlab_url",
          "title": "External Gitlab Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_google_additional_client_ids",
          "title": "External Google Additional Client Ids",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_google_client_id",
          "title": "External Google Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_google_email_optional",
          "title": "External Google Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_google_enabled",
          "title": "External Google Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_google_secret",
          "title": "External Google Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_google_skip_nonce_check",
          "title": "External Google Skip Nonce Check",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_kakao_client_id",
          "title": "External Kakao Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_kakao_email_optional",
          "title": "External Kakao Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_kakao_enabled",
          "title": "External Kakao Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_kakao_secret",
          "title": "External Kakao Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_keycloak_client_id",
          "title": "External Keycloak Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_keycloak_email_optional",
          "title": "External Keycloak Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_keycloak_enabled",
          "title": "External Keycloak Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_keycloak_secret",
          "title": "External Keycloak Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_keycloak_url",
          "title": "External Keycloak Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_linkedin_oidc_client_id",
          "title": "External Linkedin Oidc Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_linkedin_oidc_email_optional",
          "title": "External Linkedin Oidc Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_linkedin_oidc_enabled",
          "title": "External Linkedin Oidc Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_linkedin_oidc_secret",
          "title": "External Linkedin Oidc Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_notion_client_id",
          "title": "External Notion Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_notion_email_optional",
          "title": "External Notion Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_notion_enabled",
          "title": "External Notion Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_notion_secret",
          "title": "External Notion Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_phone_enabled",
          "title": "External Phone Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_slack_client_id",
          "title": "External Slack Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_slack_email_optional",
          "title": "External Slack Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_slack_enabled",
          "title": "External Slack Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_slack_oidc_client_id",
          "title": "External Slack Oidc Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_slack_oidc_email_optional",
          "title": "External Slack Oidc Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_slack_oidc_enabled",
          "title": "External Slack Oidc Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_slack_oidc_secret",
          "title": "External Slack Oidc Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_slack_secret",
          "title": "External Slack Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_spotify_client_id",
          "title": "External Spotify Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_spotify_email_optional",
          "title": "External Spotify Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_spotify_enabled",
          "title": "External Spotify Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_spotify_secret",
          "title": "External Spotify Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_twitch_client_id",
          "title": "External Twitch Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_twitch_email_optional",
          "title": "External Twitch Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_twitch_enabled",
          "title": "External Twitch Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_twitch_secret",
          "title": "External Twitch Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_twitter_client_id",
          "title": "External Twitter Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_twitter_email_optional",
          "title": "External Twitter Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_twitter_enabled",
          "title": "External Twitter Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_twitter_secret",
          "title": "External Twitter Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_web3_ethereum_enabled",
          "title": "External Web3 Ethereum Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_web3_solana_enabled",
          "title": "External Web3 Solana Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_workos_client_id",
          "title": "External Workos Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_workos_enabled",
          "title": "External Workos Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_workos_secret",
          "title": "External Workos Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_workos_url",
          "title": "External Workos Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_x_client_id",
          "title": "External X Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_x_email_optional",
          "title": "External X Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_x_enabled",
          "title": "External X Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_x_secret",
          "title": "External X Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_zoom_client_id",
          "title": "External Zoom Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "external_zoom_email_optional",
          "title": "External Zoom Email Optional",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_zoom_enabled",
          "title": "External Zoom Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "external_zoom_secret",
          "title": "External Zoom Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_after_user_created_enabled",
          "title": "Hook After User Created Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_after_user_created_secrets",
          "title": "Hook After User Created Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_after_user_created_uri",
          "title": "Hook After User Created Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_before_user_created_enabled",
          "title": "Hook Before User Created Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_before_user_created_secrets",
          "title": "Hook Before User Created Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_before_user_created_uri",
          "title": "Hook Before User Created Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_custom_access_token_enabled",
          "title": "Hook Custom Access Token Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_custom_access_token_secrets",
          "title": "Hook Custom Access Token Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_custom_access_token_uri",
          "title": "Hook Custom Access Token Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_mfa_verification_attempt_enabled",
          "title": "Hook Mfa Verification Attempt Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_mfa_verification_attempt_secrets",
          "title": "Hook Mfa Verification Attempt Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_mfa_verification_attempt_uri",
          "title": "Hook Mfa Verification Attempt Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_password_verification_attempt_enabled",
          "title": "Hook Password Verification Attempt Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_password_verification_attempt_secrets",
          "title": "Hook Password Verification Attempt Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_password_verification_attempt_uri",
          "title": "Hook Password Verification Attempt Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_send_email_enabled",
          "title": "Hook Send Email Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_send_email_secrets",
          "title": "Hook Send Email Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_send_email_uri",
          "title": "Hook Send Email Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_send_sms_enabled",
          "title": "Hook Send Sms Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "hook_send_sms_secrets",
          "title": "Hook Send Sms Secrets",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "hook_send_sms_uri",
          "title": "Hook Send Sms Uri",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "jwt_exp",
          "title": "Jwt Exp",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mailer_allow_unverified_email_sign_ins",
          "title": "Mailer Allow Unverified Email Sign Ins",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_autoconfirm",
          "title": "Mailer Autoconfirm",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_email_changed_enabled",
          "title": "Mailer Notifications Email Changed Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_identity_linked_enabled",
          "title": "Mailer Notifications Identity Linked Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_identity_unlinked_enabled",
          "title": "Mailer Notifications Identity Unlinked Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_mfa_factor_enrolled_enabled",
          "title": "Mailer Notifications Mfa Factor Enrolled Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_mfa_factor_unenrolled_enabled",
          "title": "Mailer Notifications Mfa Factor Unenrolled Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_password_changed_enabled",
          "title": "Mailer Notifications Password Changed Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_notifications_phone_changed_enabled",
          "title": "Mailer Notifications Phone Changed Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_otp_exp",
          "title": "Mailer Otp Exp",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mailer_otp_length",
          "title": "Mailer Otp Length",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mailer_secure_email_change_enabled",
          "title": "Mailer Secure Email Change Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mailer_subjects_confirmation",
          "title": "Mailer Subjects Confirmation",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_email_change",
          "title": "Mailer Subjects Email Change",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_email_changed_notification",
          "title": "Mailer Subjects Email Changed Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_identity_linked_notification",
          "title": "Mailer Subjects Identity Linked Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_identity_unlinked_notification",
          "title": "Mailer Subjects Identity Unlinked Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_invite",
          "title": "Mailer Subjects Invite",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_magic_link",
          "title": "Mailer Subjects Magic Link",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_mfa_factor_enrolled_notification",
          "title": "Mailer Subjects Mfa Factor Enrolled Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_mfa_factor_unenrolled_notification",
          "title": "Mailer Subjects Mfa Factor Unenrolled Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_password_changed_notification",
          "title": "Mailer Subjects Password Changed Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_phone_changed_notification",
          "title": "Mailer Subjects Phone Changed Notification",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_reauthentication",
          "title": "Mailer Subjects Reauthentication",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_subjects_recovery",
          "title": "Mailer Subjects Recovery",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_confirmation_content",
          "title": "Mailer Templates Confirmation Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_email_change_content",
          "title": "Mailer Templates Email Change Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_email_changed_notification_content",
          "title": "Mailer Templates Email Changed Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_identity_linked_notification_content",
          "title": "Mailer Templates Identity Linked Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_identity_unlinked_notification_content",
          "title": "Mailer Templates Identity Unlinked Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_invite_content",
          "title": "Mailer Templates Invite Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_magic_link_content",
          "title": "Mailer Templates Magic Link Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_mfa_factor_enrolled_notification_content",
          "title": "Mailer Templates Mfa Factor Enrolled Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_mfa_factor_unenrolled_notification_content",
          "title": "Mailer Templates Mfa Factor Unenrolled Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_password_changed_notification_content",
          "title": "Mailer Templates Password Changed Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_phone_changed_notification_content",
          "title": "Mailer Templates Phone Changed Notification Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_reauthentication_content",
          "title": "Mailer Templates Reauthentication Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mailer_templates_recovery_content",
          "title": "Mailer Templates Recovery Content",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mfa_max_enrolled_factors",
          "title": "Mfa Max Enrolled Factors",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mfa_phone_enroll_enabled",
          "title": "Mfa Phone Enroll Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mfa_phone_max_frequency",
          "title": "Mfa Phone Max Frequency",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mfa_phone_otp_length",
          "title": "Mfa Phone Otp Length",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "mfa_phone_template",
          "title": "Mfa Phone Template",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "mfa_phone_verify_enabled",
          "title": "Mfa Phone Verify Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mfa_totp_enroll_enabled",
          "title": "Mfa Totp Enroll Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mfa_totp_verify_enabled",
          "title": "Mfa Totp Verify Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mfa_web_authn_enroll_enabled",
          "title": "Mfa Web Authn Enroll Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "mfa_web_authn_verify_enabled",
          "title": "Mfa Web Authn Verify Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "nimbus_oauth_client_id",
          "title": "Nimbus Oauth Client Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "nimbus_oauth_client_secret",
          "title": "Nimbus Oauth Client Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "nimbus_oauth_email_optional",
          "title": "Nimbus Oauth Email Optional",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "oauth_server_allow_dynamic_registration",
          "title": "Oauth Server Allow Dynamic Registration",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "oauth_server_authorization_path",
          "title": "Oauth Server Authorization Path",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "oauth_server_enabled",
          "title": "Oauth Server Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "passkey_enabled",
          "title": "Passkey Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "password_hibp_enabled",
          "title": "Password Hibp Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "password_min_length",
          "title": "Password Min Length",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "password_required_characters",
          "title": "Password Required Characters",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "rate_limit_anonymous_users",
          "title": "Rate Limit Anonymous Users",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_email_sent",
          "title": "Rate Limit Email Sent",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_otp",
          "title": "Rate Limit Otp",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_sms_sent",
          "title": "Rate Limit Sms Sent",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_token_refresh",
          "title": "Rate Limit Token Refresh",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_verify",
          "title": "Rate Limit Verify",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "rate_limit_web3",
          "title": "Rate Limit Web3",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "refresh_token_rotation_enabled",
          "title": "Refresh Token Rotation Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "saml_allow_encrypted_assertions",
          "title": "Saml Allow Encrypted Assertions",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "saml_enabled",
          "title": "Saml Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "saml_external_url",
          "title": "Saml External Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "security_captcha_enabled",
          "title": "Security Captcha Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "security_captcha_provider",
          "title": "Security Captcha Provider",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "security_captcha_secret",
          "title": "Security Captcha Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "security_manual_linking_enabled",
          "title": "Security Manual Linking Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "security_refresh_token_reuse_interval",
          "title": "Security Refresh Token Reuse Interval",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Refresh token reuse interval in seconds."
        },
        {
          "name": "security_sb_forwarded_for_enabled",
          "title": "Security Sb Forwarded For Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "security_update_password_require_current_password",
          "title": "Security Update Password Require Current Password",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Require the user's current password when updating their password."
        },
        {
          "name": "security_update_password_require_reauthentication",
          "title": "Security Update Password Require Reauthentication",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "sessions_inactivity_timeout",
          "title": "Sessions Inactivity Timeout",
          "type": "`$NUMBER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$NUMBER`"
            }
          },
          "short": "Session inactivity timeout in hours."
        },
        {
          "name": "sessions_single_per_user",
          "title": "Sessions Single Per User",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "sessions_tags",
          "title": "Sessions Tags",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sessions_timebox",
          "title": "Sessions Timebox",
          "type": "`$NUMBER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$NUMBER`"
            }
          },
          "short": "Session timebox in hours."
        },
        {
          "name": "site_url",
          "title": "Site Url",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_autoconfirm",
          "title": "Sms Autoconfirm",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "sms_max_frequency",
          "title": "Sms Max Frequency",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "sms_messagebird_access_key",
          "title": "Sms Messagebird Access Key",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_messagebird_originator",
          "title": "Sms Messagebird Originator",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_otp_exp",
          "title": "Sms Otp Exp",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "sms_otp_length",
          "title": "Sms Otp Length",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "sms_provider",
          "title": "Sms Provider",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_template",
          "title": "Sms Template",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_test_otp",
          "title": "Sms Test Otp",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_test_otp_valid_until",
          "title": "Sms Test Otp Valid Until",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "format": "date-time"
        },
        {
          "name": "sms_textlocal_api_key",
          "title": "Sms Textlocal Api Key",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_textlocal_sender",
          "title": "Sms Textlocal Sender",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_account_sid",
          "title": "Sms Twilio Account Sid",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_auth_token",
          "title": "Sms Twilio Auth Token",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_content_sid",
          "title": "Sms Twilio Content Sid",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_message_service_sid",
          "title": "Sms Twilio Message Service Sid",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_verify_account_sid",
          "title": "Sms Twilio Verify Account Sid",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_verify_auth_token",
          "title": "Sms Twilio Verify Auth Token",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_twilio_verify_message_service_sid",
          "title": "Sms Twilio Verify Message Service Sid",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_vonage_api_key",
          "title": "Sms Vonage Api Key",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_vonage_api_secret",
          "title": "Sms Vonage Api Secret",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "sms_vonage_from",
          "title": "Sms Vonage From",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "smtp_admin_email",
          "title": "Smtp Admin Email",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "format": "email"
        },
        {
          "name": "smtp_host",
          "title": "Smtp Host",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "smtp_max_frequency",
          "title": "Smtp Max Frequency",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "smtp_pass",
          "title": "Smtp Pass",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "smtp_port",
          "title": "Smtp Port",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "smtp_sender_name",
          "title": "Smtp Sender Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "smtp_user",
          "title": "Smtp User",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "uri_allow_list",
          "title": "Uri Allow List",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "webauthn_rp_display_name",
          "title": "Webauthn Rp Display Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "webauthn_rp_id",
          "title": "Webauthn Rp Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "webauthn_rp_origins",
          "title": "Webauthn Rp Origins",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        }
      ],
      "name": "auth",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/config/auth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "billing": {
      "fields": [],
      "name": "billing",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/billing/addons/{addon_variant}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "addons"
                },
                {
                  "var": "addon_variant"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "billing",
                "addons",
                "{addon_variant}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "addon_variant",
                    "orig": "addon_variant",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "pitr_7"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "addon_variant",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/billing/addons",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "addons"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "billing",
                "addons"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "addon",
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch": {
      "fields": [
        {
          "name": "branch_name",
          "title": "Branch Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "db_host",
          "title": "Db Host",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "db_pass",
          "title": "Db Pass",
          "type": "`$STRING`"
        },
        {
          "name": "db_port",
          "title": "Db Port",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "db_user",
          "title": "Db User",
          "type": "`$STRING`"
        },
        {
          "name": "deletion_scheduled_at",
          "title": "Deletion Scheduled At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "desired_instance_size",
          "title": "Desired Instance Size",
          "type": "`$STRING`"
        },
        {
          "name": "git_branch",
          "title": "Git Branch",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "is_default",
          "title": "Is Default",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "jwt_secret",
          "title": "Jwt Secret",
          "type": "`$STRING`"
        },
        {
          "name": "latest_check_run_id",
          "title": "Latest Check Run Id",
          "type": "`$NUMBER`",
          "short": "This field is deprecated and will not be populated.",
          "deprecated": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "notify_url",
          "title": "Notify Url",
          "type": "`$STRING`",
          "short": "HTTP endpoint to receive branch status updates.",
          "format": "uri"
        },
        {
          "name": "parent_project_ref",
          "title": "Parent Project Ref",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "persistent",
          "title": "Persistent",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          }
        },
        {
          "name": "postgres_engine",
          "title": "Postgres Engine",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "Postgres engine version."
        },
        {
          "name": "postgres_version",
          "title": "Postgres Version",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "pr_number",
          "title": "Pr Number",
          "type": "`$INTEGER`",
          "format": "int32"
        },
        {
          "name": "preview_project_status",
          "title": "Preview Project Status",
          "type": "`$STRING`"
        },
        {
          "name": "project_ref",
          "title": "Project Ref",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "ref",
          "title": "Ref",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`"
        },
        {
          "name": "release_channel",
          "title": "Release Channel",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "Release channel."
        },
        {
          "name": "request_review",
          "title": "Request Review",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "reset_on_push",
          "title": "Reset On Push",
          "type": "`$BOOLEAN`",
          "short": "This field is deprecated and will be ignored.",
          "deprecated": true
        },
        {
          "name": "review_requested_at",
          "title": "Review Requested At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "secrets",
          "title": "Secrets",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "This field is deprecated.",
          "deprecated": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "with_data",
          "title": "With Data",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            }
          }
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/branches/{branch_id_or_ref}/restore",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id_or_ref"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{branch_id_or_ref}",
                "restore"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id_or_ref",
                    "orig": "branch_id_or_ref",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "restore",
                "exist": [
                  "branch_id_or_ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/branches",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/branches",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/branches/{name}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "name": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "preview-login-page"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/branches/{branch_id_or_ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id_or_ref": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id_or_ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/branches/{branch_id_or_ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id_or_ref": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id_or_ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "force",
                    "orig": "force",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": false
                  }
                ]
              },
              "select": {
                "exist": [
                  "force",
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/branches/{branch_id_or_ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id_or_ref": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id_or_ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_update_response_output": {
      "fields": [
        {
          "name": "migration_version",
          "title": "Migration Version",
          "type": "`$STRING`"
        }
      ],
      "name": "branch_update_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/branches/{branch_id_or_ref}/merge",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id_or_ref"
                },
                {
                  "lit": "merge"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{branch_id_or_ref}",
                "merge"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id_or_ref",
                    "orig": "branch_id_or_ref",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id_or_ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/branches/{branch_id_or_ref}/push",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id_or_ref"
                },
                {
                  "lit": "push"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{branch_id_or_ref}",
                "push"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id_or_ref",
                    "orig": "branch_id_or_ref",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id_or_ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/branches/{branch_id_or_ref}/reset",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id_or_ref"
                },
                {
                  "lit": "reset"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{branch_id_or_ref}",
                "reset"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id_or_ref",
                    "orig": "branch_id_or_ref",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id_or_ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "bulk_update_function_response_output": {
      "fields": [
        {
          "name": "functions",
          "title": "Functions",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "bulk_update_function_response_output",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/functions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "functions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "functions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "create_provider_response_output": {
      "fields": [
        {
          "name": "attribute_mapping",
          "title": "Attribute Mapping",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "domains",
          "title": "Domains",
          "type": "`$ARRAY`"
        },
        {
          "name": "metadata_url",
          "title": "Metadata Url",
          "type": "`$STRING`"
        },
        {
          "name": "metadata_xml",
          "title": "Metadata Xml",
          "type": "`$STRING`"
        },
        {
          "name": "name_id_format",
          "title": "Name Id Format",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "What type of provider will be created"
        }
      ],
      "name": "create_provider_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/auth/sso/providers",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "sso"
                },
                {
                  "lit": "providers"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "sso",
                "providers"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "create_role_response_output": {
      "fields": [
        {
          "name": "read_only",
          "title": "Read Only",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "create_role_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/cli/login-role",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "cli"
                },
                {
                  "lit": "login-role"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "cli",
                "login-role"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "database": {
      "fields": [
        {
          "name": "database_identifier",
          "title": "Database Identifier",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "parameters",
          "title": "Parameters",
          "type": "`$ARRAY`"
        },
        {
          "name": "query",
          "title": "Query",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "read_replica_region",
          "title": "Read Replica Region",
          "type": "`$STRING`",
          "req": true,
          "short": "Region you want your read replica to reside in"
        },
        {
          "name": "recovery_time_target_unix",
          "title": "Recovery Time Target Unix",
          "type": "`$INTEGER`",
          "req": true,
          "format": "int64"
        },
        {
          "name": "rollback",
          "title": "Rollback",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "database",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/migrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "migration",
                "exist": [
                  "idempotency_key",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/backups/restore",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "restore"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/backups/restore-pitr",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "restore-pitr"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "restore-pitr"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/backups/undo",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "undo"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "undo"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/query",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "query"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "query"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "query",
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/query/read-only",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "query"
                },
                {
                  "lit": "read-only"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "query",
                "read-only"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/webhooks/enable",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "webhooks"
                },
                {
                  "lit": "enable"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "webhooks",
                "enable"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/read-replicas/remove",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "read-replicas"
                },
                {
                  "lit": "remove"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "read-replicas",
                "remove"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/read-replicas/setup",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "read-replicas"
                },
                {
                  "lit": "setup"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "read-replicas",
                "setup"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/readonly/temporary-disable",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "readonly"
                },
                {
                  "lit": "temporary-disable"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "readonly",
                "temporary-disable"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/context",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "context"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "context"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.databases`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "context",
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/openapi",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "openapi"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "openapi"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "schema",
                    "orig": "schema",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "public"
                  }
                ]
              },
              "select": {
                "$action": "openapi",
                "exist": [
                  "project_id",
                  "schema"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/jit-access",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "jit-access"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "jit-access"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/database/migrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "gte",
                    "orig": "gte",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "20250312000000"
                  }
                ]
              },
              "select": {
                "$action": "migration",
                "exist": [
                  "gte",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/database/jit/invite/{invite_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                },
                {
                  "lit": "invite"
                },
                {
                  "var": "invite_id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit",
                "invite",
                "{invite_id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "invite_id",
                    "orig": "invite_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "55555555-5555-4555-8555-555555555555"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "invite_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/database/jit/{user_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                },
                {
                  "var": "user_id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit",
                "{user_id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "55555555-5555-4555-8555-555555555555"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id",
                  "user_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/database/migrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ],
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "migration",
                "exist": [
                  "idempotency_key",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/database/migrations/{version}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                },
                {
                  "var": "version"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations",
                "{version}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "20250312000000"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id",
                  "version"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.invite"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.jit"
          ],
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "database_upgrade_status_response_output": {
      "fields": [
        {
          "name": "error",
          "title": "Error",
          "type": "`$STRING`"
        },
        {
          "name": "initiated_at",
          "title": "Initiated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "latest_status_at",
          "title": "Latest Status At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "progress",
          "title": "Progress",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "target_version",
          "title": "Target Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "database_upgrade_status_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/upgrade/status",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "upgrade"
                },
                {
                  "lit": "status"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "upgrade",
                "status"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.databaseUpgradeStatus`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "tracking_id",
                    "orig": "tracking_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id",
                  "tracking_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "deploy": {
      "fields": [],
      "name": "deploy",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/functions/deploy",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "lit": "deploy"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "functions",
                "deploy"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "bundle_only",
                    "orig": "bundleOnly",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "hello-world"
                  }
                ]
              },
              "select": {
                "exist": [
                  "bundle_only",
                  "project_id",
                  "slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "disk": {
      "fields": [
        {
          "name": "attributes",
          "title": "Attributes",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "last_modified_at",
          "title": "Last Modified At",
          "type": "`$STRING`"
        }
      ],
      "name": "disk",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/disk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "disk"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "disk"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "disk_autoscale_config_output": {
      "fields": [
        {
          "name": "growth_percent",
          "title": "Growth Percent",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Growth percentage for disk autoscaling"
        },
        {
          "name": "max_size_gb",
          "title": "Max Size Gb",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Maximum limit the disk size will grow to in GB"
        },
        {
          "name": "min_increment_gb",
          "title": "Min Increment Gb",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Minimum increment size for disk autoscaling in GB"
        }
      ],
      "name": "disk_autoscale_config_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/disk/autoscale",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "disk"
                },
                {
                  "lit": "autoscale"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "disk",
                "autoscale"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "disk_util_metrics_response_output": {
      "fields": [
        {
          "name": "fs_avail_bytes",
          "title": "Fs Avail Bytes",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "fs_size_bytes",
          "title": "Fs Size Bytes",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "fs_used_bytes",
          "title": "Fs Used Bytes",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "name": "disk_util_metrics_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/disk/util",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "disk"
                },
                {
                  "lit": "util"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "disk",
                "util"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.metrics`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "domain": {
      "fields": [],
      "name": "domain",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/custom-hostname",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "custom-hostname"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "custom-hostname"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "remove_addon",
                    "orig": "remove_addon",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref",
                  "remove_addon"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/vanity-subdomain",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "vanity-subdomain"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "vanity-subdomain"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "edge_function": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "edge_function",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/functions/{function_slug}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "function_slug": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "function_slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "hello-world"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "environment": {
      "fields": [],
      "name": "environment",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/branches/{branch_id_or_ref}/diff",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id_or_ref"
                },
                {
                  "lit": "diff"
                }
              ],
              "parts": [
                "v1",
                "branches",
                "{branch_id_or_ref}",
                "diff"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id_or_ref",
                    "orig": "branch_id_or_ref",
                    "type": "`$ANY`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "included_schema",
                    "orig": "included_schemas",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "public,auth"
                  },
                  {
                    "name": "pgdelta",
                    "orig": "pgdelta",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id_or_ref",
                  "included_schema",
                  "pgdelta"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/actions/{run_id}/logs",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "actions",
                "{action_id}",
                "logs"
              ],
              "rename": {
                "param": {
                  "ref": "project_id",
                  "run_id": "action_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "action_id",
                    "orig": "run_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "action_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/branches",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.action"
          ]
        ]
      }
    },
    "function": {
      "fields": [
        {
          "name": "body",
          "title": "Body",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$INTEGER`",
          "req": true,
          "format": "int64"
        },
        {
          "name": "entrypoint_path",
          "title": "Entrypoint Path",
          "type": "`$STRING`"
        },
        {
          "name": "ezbr_sha256",
          "title": "Ezbr Sha256",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "import_map",
          "title": "Import Map",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "import_map_path",
          "title": "Import Map Path",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$INTEGER`",
          "req": true,
          "format": "int64"
        },
        {
          "name": "verify_jwt",
          "title": "Verify Jwt",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$INTEGER`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "function",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/functions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "functions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "functions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "entrypoint_path",
                    "orig": "entrypoint_path",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "index.ts"
                  },
                  {
                    "name": "ezbr_sha256",
                    "orig": "ezbr_sha256",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7"
                  },
                  {
                    "name": "import_map",
                    "orig": "import_map",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "import_map_path",
                    "orig": "import_map_path",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "import_map.json"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Hello World"
                  },
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "hello-world"
                  },
                  {
                    "name": "verify_jwt",
                    "orig": "verify_jwt",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "entrypoint_path",
                  "ezbr_sha256",
                  "import_map",
                  "import_map_path",
                  "name",
                  "ref",
                  "slug",
                  "verify_jwt"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/functions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "functions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "functions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/functions/{function_slug}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "function_slug": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "function_slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "hello-world"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/functions/{function_slug}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "function_slug": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "function_slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "hello-world"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "entrypoint_path",
                    "orig": "entrypoint_path",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "index.ts"
                  },
                  {
                    "name": "ezbr_sha256",
                    "orig": "ezbr_sha256",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7"
                  },
                  {
                    "name": "import_map",
                    "orig": "import_map",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "import_map_path",
                    "orig": "import_map_path",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "import_map.json"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Hello World"
                  },
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "hello-world"
                  },
                  {
                    "name": "verify_jwt",
                    "orig": "verify_jwt",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "entrypoint_path",
                  "ezbr_sha256",
                  "id",
                  "import_map",
                  "import_map_path",
                  "name",
                  "project_id",
                  "slug",
                  "verify_jwt"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "functionscombined_stat": {
      "fields": [
        {
          "name": "error",
          "title": "Error",
          "type": "`$ANY`"
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$ARRAY`"
        }
      ],
      "name": "functionscombined_stat",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/functions.combined-stats",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "functions.combined-stats"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "functions.combined-stats"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "function_id",
                    "orig": "function_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "3c078cce-ad70-4148-9f37-4da362789053"
                  },
                  {
                    "name": "interval",
                    "orig": "interval",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "1hr"
                  }
                ]
              },
              "select": {
                "exist": [
                  "function_id",
                  "interval",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "invite": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "format": "email"
        },
        {
          "name": "invite_id",
          "title": "Invite Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "roles",
          "title": "Roles",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "user_roles",
          "title": "User Roles",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "invite",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/jit/invite",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                },
                {
                  "lit": "invite"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit",
                "invite"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "jit": {
      "fields": [
        {
          "name": "act",
          "title": "Act",
          "type": "`$STRING`"
        },
        {
          "name": "allowed_networks",
          "title": "Allowed Networks",
          "type": "`$OBJECT`"
        },
        {
          "name": "branches_only",
          "title": "Branches Only",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$NUMBER`"
        },
        {
          "name": "rhost",
          "title": "Rhost",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "roles",
          "title": "Roles",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "op": {
            "update": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "format": "uuid"
        },
        {
          "name": "user_role",
          "title": "User Role",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "user_roles",
          "title": "User Roles",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "jit",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/jit",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/jit",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.user_roles`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/database/jit",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "jit_access_response_output": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "format": "email"
        },
        {
          "name": "token",
          "title": "Token",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "format": "uuid"
        },
        {
          "name": "user_roles",
          "title": "User Roles",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "jit_access_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/jit/invite/accept",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                },
                {
                  "lit": "invite"
                },
                {
                  "lit": "accept"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit",
                "invite",
                "accept"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "jit_list_access_response_output": {
      "fields": [
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "jit_list_access_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/jit/list",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "jit"
                },
                {
                  "lit": "list"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "jit",
                "list"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "legacy": {
      "fields": [
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "legacy",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/api-keys/legacy",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "api-keys"
                },
                {
                  "lit": "legacy"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "api-keys",
                "legacy"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/api-keys/legacy",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "api-keys"
                },
                {
                  "lit": "legacy"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "api-keys",
                "legacy"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "enabled",
                    "orig": "enabled",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "reqd": true,
                    "example": "true"
                  }
                ]
              },
              "select": {
                "exist": [
                  "enabled",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "list_action_run_response_output": {
      "fields": [
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "check_run_id",
          "title": "Check Run Id",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "git_config",
          "title": "Git Config",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "run_steps",
          "title": "Run Steps",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "workdir",
          "title": "Workdir",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_action_run_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/actions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "actions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "actions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 0
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "offset",
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "list_project_addons_response_output": {
      "fields": [
        {
          "name": "available_addons",
          "title": "Available Addons",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "selected_addons",
          "title": "Selected Addons",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "list_project_addons_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/billing/addons",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "addons"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "billing",
                "addons"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "list_providers_response_output": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`"
        },
        {
          "name": "domains",
          "title": "Domains",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "saml",
          "title": "Saml",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_providers_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/sso/providers",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "sso"
                },
                {
                  "lit": "providers"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "sso",
                "providers"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "log": {
      "fields": [
        {
          "name": "error",
          "title": "Error",
          "type": "`$ANY`"
        },
        {
          "name": "result",
          "title": "Result",
          "type": "`$ARRAY`"
        }
      ],
      "name": "log",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/logs",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "logs"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "iso_timestamp_end",
                    "orig": "iso_timestamp_end",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2025-03-01T23:59:59Z"
                  },
                  {
                    "name": "iso_timestamp_start",
                    "orig": "iso_timestamp_start",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2025-03-01T00:00:00Z"
                  },
                  {
                    "name": "sql",
                    "orig": "sql",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "select event_message from edge_logs limit 10"
                  }
                ]
              },
              "select": {
                "exist": [
                  "iso_timestamp_end",
                  "iso_timestamp_start",
                  "project_id",
                  "sql"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "network_ban_response_enriched_output": {
      "fields": [],
      "name": "network_ban_response_enriched_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/network-bans/retrieve/enriched",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "network-bans"
                },
                {
                  "lit": "retrieve"
                },
                {
                  "lit": "enriched"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "network-bans",
                "retrieve",
                "enriched"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "network_ban_response_output": {
      "fields": [],
      "name": "network_ban_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/network-bans/retrieve",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "network-bans"
                },
                {
                  "lit": "retrieve"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "network-bans",
                "retrieve"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "network_restriction": {
      "fields": [
        {
          "name": "add",
          "title": "Add",
          "type": "`$OBJECT`"
        },
        {
          "name": "applied_at",
          "title": "Applied At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "config",
          "title": "Config",
          "type": "`$OBJECT`",
          "req": true,
          "short": "At any given point in time, this is the config that the user has requested be applied to their project."
        },
        {
          "name": "entitlement",
          "title": "Entitlement",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "old_config",
          "title": "Old Config",
          "type": "`$OBJECT`",
          "short": "Populated when a new config has been received, but not registered as successfully applied to a project."
        },
        {
          "name": "remove",
          "title": "Remove",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "format": "date-time"
        }
      ],
      "name": "network_restriction",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/network-restrictions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "network-restrictions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "network-restrictions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/network-restrictions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "network-restrictions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "network-restrictions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "network_restrictions_response_output": {
      "fields": [
        {
          "name": "dbAllowedCidrs",
          "title": "Db Allowed Cidrs",
          "type": "`$ARRAY`"
        },
        {
          "name": "dbAllowedCidrsV6",
          "title": "Db Allowed Cidrs V6",
          "type": "`$ARRAY`"
        }
      ],
      "name": "network_restrictions_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/network-restrictions/apply",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "network-restrictions"
                },
                {
                  "lit": "apply"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "network-restrictions",
                "apply"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "o_auth": {
      "fields": [
        {
          "name": "client_id",
          "title": "Client Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "client_secret",
          "title": "Client Secret",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "refresh_token",
          "title": "Refresh Token",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "o_auth",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/oauth/revoke",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "oauth"
                },
                {
                  "lit": "revoke"
                }
              ],
              "parts": [
                "v1",
                "oauth",
                "revoke"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "client_id": "`reqdata.client_id`",
                  "client_secret": "`reqdata.client_secret`",
                  "refresh_token": "`reqdata.refresh_token`"
                },
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/oauth/authorize",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "oauth"
                },
                {
                  "lit": "authorize"
                }
              ],
              "parts": [
                "v1",
                "oauth",
                "authorize"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "client_id",
                    "orig": "client_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "66666666-6666-4666-8666-666666666666"
                  },
                  {
                    "name": "code_challenge",
                    "orig": "code_challenge",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ"
                  },
                  {
                    "name": "code_challenge_method",
                    "orig": "code_challenge_method",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "S256"
                  },
                  {
                    "name": "organization_slug",
                    "orig": "organization_slug",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "tsrqponmlkjihgfedcba"
                  },
                  {
                    "name": "redirect_uri",
                    "orig": "redirect_uri",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "https://app.acme.com/auth/callback"
                  },
                  {
                    "name": "resource",
                    "orig": "resource",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "https://mcp.supabase.com/projects"
                  },
                  {
                    "name": "response_mode",
                    "orig": "response_mode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "query"
                  },
                  {
                    "name": "response_type",
                    "orig": "response_type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "code"
                  },
                  {
                    "name": "scope",
                    "orig": "scope",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "projects:read projects:write"
                  },
                  {
                    "name": "state",
                    "orig": "state",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "st_9f4d3a206b2e4a7e8c91"
                  },
                  {
                    "name": "target_flow",
                    "orig": "target_flow",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "client_id",
                  "code_challenge",
                  "code_challenge_method",
                  "organization_slug",
                  "redirect_uri",
                  "resource",
                  "response_mode",
                  "response_type",
                  "scope",
                  "state",
                  "target_flow"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/oauth/authorize/project-claim",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "oauth"
                },
                {
                  "lit": "authorize"
                },
                {
                  "lit": "project-claim"
                }
              ],
              "parts": [
                "v1",
                "oauth",
                "authorize",
                "project-claim"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "client_id",
                    "orig": "client_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "66666666-6666-4666-8666-666666666666"
                  },
                  {
                    "name": "code_challenge",
                    "orig": "code_challenge",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ"
                  },
                  {
                    "name": "code_challenge_method",
                    "orig": "code_challenge_method",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "S256"
                  },
                  {
                    "name": "project_ref",
                    "orig": "project_ref",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "redirect_uri",
                    "orig": "redirect_uri",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "https://app.acme.com/auth/callback"
                  },
                  {
                    "name": "response_mode",
                    "orig": "response_mode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "query"
                  },
                  {
                    "name": "response_type",
                    "orig": "response_type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "code"
                  },
                  {
                    "name": "state",
                    "orig": "state",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "st_9f4d3a206b2e4a7e8c91"
                  }
                ]
              },
              "select": {
                "exist": [
                  "client_id",
                  "code_challenge",
                  "code_challenge_method",
                  "project_ref",
                  "redirect_uri",
                  "response_mode",
                  "response_type",
                  "state"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "o_auth_token_response_output": {
      "fields": [
        {
          "name": "access_token",
          "title": "Access Token",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "expires_in",
          "title": "Expires In",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "refresh_token",
          "title": "Refresh Token",
          "type": "`$STRING`",
          "short": "The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`."
        },
        {
          "name": "token_type",
          "title": "Token Type",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "o_auth_token_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/oauth/token",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "oauth"
                },
                {
                  "lit": "token"
                }
              ],
              "parts": [
                "v1",
                "oauth",
                "token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization": {
      "fields": [],
      "name": "organization",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/organizations/{slug}/project-claim/{token}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "project-claim"
                },
                {
                  "var": "token"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{organization_id}",
                "project-claim",
                "{token}"
              ],
              "rename": {
                "param": {
                  "slug": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  },
                  {
                    "name": "token",
                    "orig": "token",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0123456789abcdef0123456789abcdef01234567"
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id",
                  "token"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "organization_project_claim_response_output": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "preview",
          "title": "Preview",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "project",
          "title": "Project",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "name": "organization_project_claim_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations/{slug}/project-claim/{token}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "project-claim"
                },
                {
                  "var": "token"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{organization_id}",
                "project-claim",
                "{token}"
              ],
              "rename": {
                "param": {
                  "slug": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  },
                  {
                    "name": "token",
                    "orig": "token",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "0123456789abcdef0123456789abcdef01234567"
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id",
                  "token"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "organization_projects_response_output": {
      "fields": [
        {
          "name": "cloud_provider",
          "title": "Cloud Provider",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "databases",
          "title": "Databases",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "inserted_at",
          "title": "Inserted At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "is_branch",
          "title": "Is Branch",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "ref",
          "title": "Ref",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "organization_projects_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations/{slug}/projects",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{slug}",
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.projects`"
              },
              "args": {
                "params": [
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  }
                ],
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 20
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "acme"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "created_desc"
                  },
                  {
                    "name": "status",
                    "orig": "statuses",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "ACTIVE_HEALTHY,INACTIVE"
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "offset",
                  "search",
                  "slug",
                  "sort",
                  "status"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "performance": {
      "fields": [
        {
          "name": "cache_key",
          "title": "Cache Key",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "categories",
          "title": "Categories",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "detail",
          "title": "Detail",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "facing",
          "title": "Facing",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "observed_at",
          "title": "Observed At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "remediation",
          "title": "Remediation",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "performance",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/advisors/performance",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "advisors"
                },
                {
                  "lit": "performance"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "advisors",
                "performance"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.lints`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "pgsodium": {
      "fields": [
        {
          "name": "root_key",
          "title": "Root Key",
          "type": "`$STRING`",
          "req": true,
          "short": "The pgsodium root key: 32 bytes, hex-encoded (64 characters)."
        }
      ],
      "name": "pgsodium",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/pgsodium",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "pgsodium"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "pgsodium"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/pgsodium",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "pgsodium"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "pgsodium"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "postgre": {
      "fields": [
        {
          "name": "checkpoint_timeout",
          "title": "Checkpoint Timeout",
          "type": "`$STRING`",
          "short": "Default unit: s"
        },
        {
          "name": "cron_log_statement",
          "title": "Cron Log Statement",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "effective_cache_size",
          "title": "Effective Cache Size",
          "type": "`$STRING`"
        },
        {
          "name": "hot_standby_feedback",
          "title": "Hot Standby Feedback",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_autovacuum_min_duration",
          "title": "Log Autovacuum Min Duration",
          "type": "`$STRING`",
          "short": "Default unit: ms"
        },
        {
          "name": "log_checkpoints",
          "title": "Log Checkpoints",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_connections",
          "title": "Log Connections",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_disconnections",
          "title": "Log Disconnections",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_duration",
          "title": "Log Duration",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_lock_waits",
          "title": "Log Lock Waits",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_recovery_conflict_waits",
          "title": "Log Recovery Conflict Waits",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_replication_commands",
          "title": "Log Replication Commands",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "log_startup_progress_interval",
          "title": "Log Startup Progress Interval",
          "type": "`$STRING`",
          "short": "Default unit: ms"
        },
        {
          "name": "log_temp_files",
          "title": "Log Temp Files",
          "type": "`$STRING`"
        },
        {
          "name": "logical_decoding_work_mem",
          "title": "Logical Decoding Work Mem",
          "type": "`$STRING`"
        },
        {
          "name": "maintenance_work_mem",
          "title": "Maintenance Work Mem",
          "type": "`$STRING`"
        },
        {
          "name": "max_connections",
          "title": "Max Connections",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_locks_per_transaction",
          "title": "Max Locks Per Transaction",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_logical_replication_workers",
          "title": "Max Logical Replication Workers",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_parallel_maintenance_workers",
          "title": "Max Parallel Maintenance Workers",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_parallel_workers",
          "title": "Max Parallel Workers",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_parallel_workers_per_gather",
          "title": "Max Parallel Workers Per Gather",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_replication_slots",
          "title": "Max Replication Slots",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_slot_wal_keep_size",
          "title": "Max Slot Wal Keep Size",
          "type": "`$STRING`"
        },
        {
          "name": "max_standby_archive_delay",
          "title": "Max Standby Archive Delay",
          "type": "`$STRING`"
        },
        {
          "name": "max_standby_streaming_delay",
          "title": "Max Standby Streaming Delay",
          "type": "`$STRING`"
        },
        {
          "name": "max_sync_workers_per_subscription",
          "title": "Max Sync Workers Per Subscription",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_wal_senders",
          "title": "Max Wal Senders",
          "type": "`$INTEGER`"
        },
        {
          "name": "max_wal_size",
          "title": "Max Wal Size",
          "type": "`$STRING`"
        },
        {
          "name": "max_worker_processes",
          "title": "Max Worker Processes",
          "type": "`$INTEGER`"
        },
        {
          "name": "restart_database",
          "title": "Restart Database",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "session_replication_role",
          "title": "Session Replication Role",
          "type": "`$STRING`"
        },
        {
          "name": "shared_buffers",
          "title": "Shared Buffers",
          "type": "`$STRING`"
        },
        {
          "name": "statement_timeout",
          "title": "Statement Timeout",
          "type": "`$STRING`",
          "short": "Default unit: ms"
        },
        {
          "name": "track_activity_query_size",
          "title": "Track Activity Query Size",
          "type": "`$STRING`"
        },
        {
          "name": "track_commit_timestamp",
          "title": "Track Commit Timestamp",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "wal_keep_size",
          "title": "Wal Keep Size",
          "type": "`$STRING`"
        },
        {
          "name": "wal_sender_timeout",
          "title": "Wal Sender Timeout",
          "type": "`$STRING`",
          "short": "Default unit: ms"
        },
        {
          "name": "work_mem",
          "title": "Work Mem",
          "type": "`$STRING`"
        }
      ],
      "name": "postgre",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/database/postgres",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "postgres"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "database",
                "postgres"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/config/database/postgres",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "postgres"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "database",
                "postgres"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": {
                  "checkpoint_timeout": "`reqdata.checkpoint_timeout`",
                  "cron.log_statement": "`reqdata.cron_log_statement`",
                  "effective_cache_size": "`reqdata.effective_cache_size`",
                  "hot_standby_feedback": "`reqdata.hot_standby_feedback`",
                  "log_autovacuum_min_duration": "`reqdata.log_autovacuum_min_duration`",
                  "log_checkpoints": "`reqdata.log_checkpoint`",
                  "log_connections": "`reqdata.log_connection`",
                  "log_disconnections": "`reqdata.log_disconnection`",
                  "log_duration": "`reqdata.log_duration`",
                  "log_lock_waits": "`reqdata.log_lock_wait`",
                  "log_recovery_conflict_waits": "`reqdata.log_recovery_conflict_wait`",
                  "log_replication_commands": "`reqdata.log_replication_command`",
                  "log_startup_progress_interval": "`reqdata.log_startup_progress_interval`",
                  "log_temp_files": "`reqdata.log_temp_file`",
                  "logical_decoding_work_mem": "`reqdata.logical_decoding_work_mem`",
                  "maintenance_work_mem": "`reqdata.maintenance_work_mem`",
                  "max_connections": "`reqdata.max_connection`",
                  "max_locks_per_transaction": "`reqdata.max_locks_per_transaction`",
                  "max_logical_replication_workers": "`reqdata.max_logical_replication_worker`",
                  "max_parallel_maintenance_workers": "`reqdata.max_parallel_maintenance_worker`",
                  "max_parallel_workers": "`reqdata.max_parallel_worker`",
                  "max_parallel_workers_per_gather": "`reqdata.max_parallel_workers_per_gather`",
                  "max_replication_slots": "`reqdata.max_replication_slot`",
                  "max_slot_wal_keep_size": "`reqdata.max_slot_wal_keep_size`",
                  "max_standby_archive_delay": "`reqdata.max_standby_archive_delay`",
                  "max_standby_streaming_delay": "`reqdata.max_standby_streaming_delay`",
                  "max_sync_workers_per_subscription": "`reqdata.max_sync_workers_per_subscription`",
                  "max_wal_senders": "`reqdata.max_wal_sender`",
                  "max_wal_size": "`reqdata.max_wal_size`",
                  "max_worker_processes": "`reqdata.max_worker_process`",
                  "restart_database": "`reqdata.restart_database`",
                  "session_replication_role": "`reqdata.session_replication_role`",
                  "shared_buffers": "`reqdata.shared_buffer`",
                  "statement_timeout": "`reqdata.statement_timeout`",
                  "track_activity_query_size": "`reqdata.track_activity_query_size`",
                  "track_commit_timestamp": "`reqdata.track_commit_timestamp`",
                  "wal_keep_size": "`reqdata.wal_keep_size`",
                  "wal_sender_timeout": "`reqdata.wal_sender_timeout`",
                  "work_mem": "`reqdata.work_mem`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "postgrest": {
      "fields": [
        {
          "name": "db_extra_search_path",
          "title": "Db Extra Search Path",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "db_pool",
          "title": "Db Pool",
          "type": "`$INTEGER`",
          "req": true,
          "short": "If `null`, the value is automatically configured based on compute size."
        },
        {
          "name": "db_pool_acquisition_timeout",
          "title": "Db Pool Acquisition Timeout",
          "type": "`$INTEGER`",
          "req": true,
          "short": "If `null`, the value is automatically configured to 10."
        },
        {
          "name": "db_schema",
          "title": "Db Schema",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "jwt_secret",
          "title": "Jwt Secret",
          "type": "`$STRING`"
        },
        {
          "name": "max_rows",
          "title": "Max Rows",
          "type": "`$INTEGER`",
          "req": true
        }
      ],
      "name": "postgrest",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/postgrest",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "postgrest"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "postgrest"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "project": {
      "fields": [],
      "name": "project",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/disk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "disk"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "disk"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "config_disk",
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/restore",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "restore"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "restore",
                "exist": [
                  "ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/restore/cancel",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "restore"
                },
                {
                  "lit": "cancel"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "restore",
                "cancel"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "restore_cancel",
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/network-bans",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "network-bans"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "network-bans"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "network_ban",
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project_available_restore_versions_response_output": {
      "fields": [
        {
          "name": "postgres_engine",
          "title": "Postgres Engine",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "release_channel",
          "title": "Release Channel",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "project_available_restore_versions_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/restore",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "restore"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.available_versions`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "project_claim_token_response_output": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "token_alias",
          "title": "Token Alias",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "project_claim_token_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/claim-token",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "claim-token"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "claim-token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "project_upgrade_eligibility_response_output": {
      "fields": [
        {
          "name": "app_version",
          "title": "App Version",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "postgres_version",
          "title": "Postgres Version",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "release_channel",
          "title": "Release Channel",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "project_upgrade_eligibility_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/upgrade/eligibility",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "upgrade"
                },
                {
                  "lit": "eligibility"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "upgrade",
                "eligibility"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "project_upgrade_initiate_response_output": {
      "fields": [
        {
          "name": "release_channel",
          "title": "Release Channel",
          "type": "`$STRING`"
        },
        {
          "name": "target_version",
          "title": "Target Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "project_upgrade_initiate_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/upgrade",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "upgrade"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "upgrade"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "provider": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`"
        },
        {
          "name": "domains",
          "title": "Domains",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "saml",
          "title": "Saml",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "provider",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "sso"
                },
                {
                  "lit": "providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "sso",
                "providers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "provider_id": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "77777777-7777-4777-8777-777777777777"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "sso"
                },
                {
                  "lit": "providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "sso",
                "providers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "provider_id": "id",
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "77777777-7777-4777-8777-777777777777"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "read_only_status_response_output": {
      "fields": [
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "override_active_until",
          "title": "Override Active Until",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "override_enabled",
          "title": "Override Enabled",
          "type": "`$BOOLEAN`",
          "req": true
        }
      ],
      "name": "read_only_status_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/readonly",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "readonly"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "readonly"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "realtime": {
      "fields": [
        {
          "name": "admin_suspended_at",
          "title": "Admin Suspended At",
          "type": "`$STRING`",
          "req": true,
          "short": "If set, the Realtime service has been suspended by an admin.",
          "format": "date-time"
        },
        {
          "name": "connection_pool",
          "title": "Connection Pool",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets connection pool size for Realtime Authorization"
        },
        {
          "name": "max_bytes_per_second",
          "title": "Max Bytes Per Second",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of bytes per second rate per channel limit"
        },
        {
          "name": "max_channels_per_client",
          "title": "Max Channels Per Client",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of channels per client rate limit"
        },
        {
          "name": "max_concurrent_users",
          "title": "Max Concurrent Users",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of concurrent users rate limit"
        },
        {
          "name": "max_events_per_second",
          "title": "Max Events Per Second",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of events per second rate per channel limit"
        },
        {
          "name": "max_joins_per_second",
          "title": "Max Joins Per Second",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of joins per second rate limit"
        },
        {
          "name": "max_payload_size_in_kb",
          "title": "Max Payload Size In Kb",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of payload size in KB rate limit"
        },
        {
          "name": "max_presence_events_per_second",
          "title": "Max Presence Events Per Second",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets maximum number of presence events per second rate limit"
        },
        {
          "name": "postgres_changes_pool",
          "title": "Postgres Changes Pool",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Sets connection pool size used to create Postgres Changes subscriptions"
        },
        {
          "name": "presence_enabled",
          "title": "Presence Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to enable presence"
        },
        {
          "name": "private_only",
          "title": "Private Only",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to only allow private channels"
        },
        {
          "name": "suspend",
          "title": "Suspend",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Disables the Realtime service for this project when true."
        }
      ],
      "name": "realtime",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/realtime/shutdown",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "realtime"
                },
                {
                  "lit": "shutdown"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "realtime",
                "shutdown"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "shutdown",
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/realtime",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "realtime"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "realtime"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/config/realtime",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "realtime"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "realtime"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": {
                  "connection_pool": "`reqdata.connection_pool`",
                  "max_bytes_per_second": "`reqdata.max_bytes_per_second`",
                  "max_channels_per_client": "`reqdata.max_channels_per_client`",
                  "max_concurrent_users": "`reqdata.max_concurrent_user`",
                  "max_events_per_second": "`reqdata.max_events_per_second`",
                  "max_joins_per_second": "`reqdata.max_joins_per_second`",
                  "max_payload_size_in_kb": "`reqdata.max_payload_size_in_kb`",
                  "max_presence_events_per_second": "`reqdata.max_presence_events_per_second`",
                  "postgres_changes_pool": "`reqdata.postgres_changes_pool`",
                  "presence_enabled": "`reqdata.presence_enabled`",
                  "private_only": "`reqdata.private_only`",
                  "suspend": "`reqdata.suspend`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "regions_info_output": {
      "fields": [
        {
          "name": "all",
          "title": "All",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "recommendations",
          "title": "Recommendations",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "name": "regions_info_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/available-regions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "lit": "available-regions"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "available-regions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "continent",
                    "orig": "continent",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "NA"
                  },
                  {
                    "name": "desired_instance_size",
                    "orig": "desired_instance_size",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "organization_slug",
                    "orig": "organization_slug",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  }
                ]
              },
              "select": {
                "exist": [
                  "continent",
                  "desired_instance_size",
                  "organization_slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "roles_response_output": {
      "fields": [],
      "name": "roles_response_output",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/cli/login-role",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "cli"
                },
                {
                  "lit": "login-role"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "cli",
                "login-role"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "secret": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "secret",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/secrets",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "secrets"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "secrets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/secrets",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "secrets"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "secrets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/secrets",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "secrets"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "secrets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "security": {
      "fields": [
        {
          "name": "cache_key",
          "title": "Cache Key",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "categories",
          "title": "Categories",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "detail",
          "title": "Detail",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "facing",
          "title": "Facing",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "metadata",
          "title": "Metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "observed_at",
          "title": "Observed At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "remediation",
          "title": "Remediation",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "security",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/advisors/security",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "advisors"
                },
                {
                  "lit": "security"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "advisors",
                "security"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.lints`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "lint_type",
                    "orig": "lint_type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "sql"
                  }
                ]
              },
              "select": {
                "exist": [
                  "lint_type",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "signing_key": {
      "fields": [
        {
          "name": "algorithm",
          "title": "Algorithm",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "private_jwk",
          "title": "Private Jwk",
          "type": "`$ANY`"
        },
        {
          "name": "public_jwk",
          "title": "Public Jwk",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "signing_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": {
                  "algorithm": "`reqdata.algorithm`",
                  "private_jwk": "`reqdata.private_jwk`",
                  "status": "`reqdata.status`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.keys`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "33333333-3333-4333-8333-333333333333"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "33333333-3333-4333-8333-333333333333"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": {
                  "status": "`reqdata.status`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "33333333-3333-4333-8333-333333333333"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "signing_key_response_output": {
      "fields": [
        {
          "name": "algorithm",
          "title": "Algorithm",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "public_jwk",
          "title": "Public Jwk",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "signing_key_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys/legacy",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                },
                {
                  "lit": "legacy"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys",
                "legacy"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/signing-keys/legacy",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "signing-keys"
                },
                {
                  "lit": "legacy"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "signing-keys",
                "legacy"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "snippet": {
      "fields": [
        {
          "name": "content",
          "title": "Content",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "favorite",
          "title": "Favorite",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "inserted_at",
          "title": "Inserted At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "owner",
          "title": "Owner",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "project",
          "title": "Project",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_by",
          "title": "Updated By",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "snippet",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/snippets",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "snippets"
                }
              ],
              "parts": [
                "v1",
                "snippets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "project_ref",
                    "orig": "project_ref",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort_order",
                    "orig": "sort_order",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "limit",
                  "project_ref",
                  "sort_by",
                  "sort_order"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/snippets/{id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "snippets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "snippets",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "44444444-4444-4444-8444-444444444444"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ssl_enforcement": {
      "fields": [
        {
          "name": "appliedSuccessfully",
          "title": "Applied Successfully",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "currentConfig",
          "title": "Current Config",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "requestedConfig",
          "title": "Requested Config",
          "type": "`$OBJECT`",
          "req": true
        }
      ],
      "name": "ssl_enforcement",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/ssl-enforcement",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "ssl-enforcement"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "ssl-enforcement"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/ssl-enforcement",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "ssl-enforcement"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "ssl-enforcement"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "storage": {
      "fields": [
        {
          "name": "capabilities",
          "title": "Capabilities",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "external",
          "title": "External",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "features",
          "title": "Features",
          "type": "`$OBJECT`",
          "req": true,
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          }
        },
        {
          "name": "fileSizeLimit",
          "title": "File Size Limit",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "format": "int64"
        },
        {
          "name": "migrationVersion",
          "title": "Migration Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "storage",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/storage",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "storage"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "storage"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/config/storage",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "storage"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "storage"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": {
                  "external": "`reqdata.external`",
                  "features": "`reqdata.feature`",
                  "fileSizeLimit": "`reqdata.file_size_limit`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "streamable_file": {
      "fields": [],
      "name": "streamable_file",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/functions/{function_slug}/body",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "function_slug"
                },
                {
                  "lit": "body"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "functions",
                "{function_slug}",
                "body"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "function_slug",
                    "orig": "function_slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "hello-world"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "function_slug",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.function"
          ]
        ]
      }
    },
    "subdomain_availability_response_output": {
      "fields": [
        {
          "name": "vanity_subdomain",
          "title": "Vanity Subdomain",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "subdomain_availability_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/vanity-subdomain/check-availability",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "vanity-subdomain"
                },
                {
                  "lit": "check-availability"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "vanity-subdomain",
                "check-availability"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "supavisor_config_response_output": {
      "fields": [
        {
          "name": "connectionString",
          "title": "Connection String",
          "type": "`$STRING`",
          "req": true,
          "short": "Use connection_string instead"
        },
        {
          "name": "connection_string",
          "title": "Connection String",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "database_type",
          "title": "Database Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "db_host",
          "title": "Db Host",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "db_name",
          "title": "Db Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "db_port",
          "title": "Db Port",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "db_user",
          "title": "Db User",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "default_pool_size",
          "title": "Default Pool Size",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "identifier",
          "title": "Identifier",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "is_using_scram_auth",
          "title": "Is Using Scram Auth",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "max_client_conn",
          "title": "Max Client Conn",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "pool_mode",
          "title": "Pool Mode",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "supavisor_config_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/database/pooler",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "pooler"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "database",
                "pooler"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "third_party_auth": {
      "fields": [
        {
          "name": "custom_jwks",
          "title": "Custom Jwks",
          "type": "`$ANY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "inserted_at",
          "title": "Inserted At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "jwks_url",
          "title": "Jwks Url",
          "type": "`$STRING`"
        },
        {
          "name": "oidc_issuer_url",
          "title": "Oidc Issuer Url",
          "type": "`$STRING`"
        },
        {
          "name": "resolved_at",
          "title": "Resolved At",
          "type": "`$STRING`"
        },
        {
          "name": "resolved_jwks",
          "title": "Resolved Jwks",
          "type": "`$ANY`"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "third_party_auth",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/config/auth/third-party-auth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "third-party-auth"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "third-party-auth"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/third-party-auth",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "third-party-auth"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "third-party-auth"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "third-party-auth"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "third-party-auth",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id",
                  "tpa_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "tpa_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "88888888-8888-4888-8888-888888888888"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "third-party-auth"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "third-party-auth",
                "{id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id",
                  "tpa_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "tpa_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "88888888-8888-4888-8888-888888888888"
                  },
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "typescript": {
      "fields": [
        {
          "name": "types",
          "title": "Types",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "typescript",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/types/typescript",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "types"
                },
                {
                  "lit": "typescript"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "types",
                "typescript"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "included_schema",
                    "orig": "included_schemas",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "public,auth"
                  }
                ]
              },
              "select": {
                "exist": [
                  "included_schema",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "update_custom_hostname_response_output": {
      "fields": [
        {
          "name": "custom_hostname",
          "title": "Custom Hostname",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          }
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "update_custom_hostname_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/custom-hostname/activate",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "custom-hostname"
                },
                {
                  "lit": "activate"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "custom-hostname",
                "activate"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/custom-hostname/initialize",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "custom-hostname"
                },
                {
                  "lit": "initialize"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "custom-hostname",
                "initialize"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/custom-hostname/reverify",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "custom-hostname"
                },
                {
                  "lit": "reverify"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "custom-hostname",
                "reverify"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/custom-hostname",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "custom-hostname"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "custom-hostname"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "update_provider_response_output": {
      "fields": [
        {
          "name": "attribute_mapping",
          "title": "Attribute Mapping",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`"
        },
        {
          "name": "domains",
          "title": "Domains",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "metadata_url",
          "title": "Metadata Url",
          "type": "`$STRING`"
        },
        {
          "name": "metadata_xml",
          "title": "Metadata Xml",
          "type": "`$STRING`"
        },
        {
          "name": "name_id_format",
          "title": "Name Id Format",
          "type": "`$STRING`"
        },
        {
          "name": "saml",
          "title": "Saml",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_provider_response_output",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/config/auth/sso/providers/{provider_id}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "sso"
                },
                {
                  "lit": "providers"
                },
                {
                  "var": "provider_id"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "auth",
                "sso",
                "providers",
                "{provider_id}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "provider_id",
                    "orig": "provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "77777777-7777-4777-8777-777777777777"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id",
                  "provider_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.provider"
          ]
        ]
      }
    },
    "update_supavisor_config_response_output": {
      "fields": [
        {
          "name": "default_pool_size",
          "title": "Default Pool Size",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          }
        },
        {
          "name": "pool_mode",
          "title": "Pool Mode",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Dedicated pooler mode for the project"
        }
      ],
      "name": "update_supavisor_config_response_output",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/config/database/pooler",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "pooler"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "database",
                "pooler"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_backup_schedule_response_output": {
      "fields": [
        {
          "name": "schedule_for",
          "title": "Schedule For",
          "type": "`$STRING`",
          "req": true,
          "short": "Time of day to schedule daily backups, in UTC."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp of when the backup schedule was last updated.",
          "format": "date-time"
        }
      ],
      "name": "v1_backup_schedule_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/backups/schedule",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "schedule"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "schedule"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/database/backups/schedule",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "schedule"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "schedule"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_backups_response_output": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "inserted_at",
          "title": "Inserted At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "is_physical_backup",
          "title": "Is Physical Backup",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "v1_backups_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/backups",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_get_migration_response_output": {
      "fields": [
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`"
        },
        {
          "name": "idempotency_key",
          "title": "Idempotency Key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "rollback",
          "title": "Rollback",
          "type": "`$ARRAY`"
        },
        {
          "name": "statements",
          "title": "Statements",
          "type": "`$ARRAY`"
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_get_migration_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/migrations/{version}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                },
                {
                  "var": "version"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations",
                "{version}"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  },
                  {
                    "name": "version",
                    "orig": "version",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "20250312000000"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id",
                  "version"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_get_usage_api_count_response_output": {
      "fields": [
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "total_auth_requests",
          "title": "Total Auth Requests",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "total_realtime_requests",
          "title": "Total Realtime Requests",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "total_rest_requests",
          "title": "Total Rest Requests",
          "type": "`$NUMBER`",
          "req": true
        },
        {
          "name": "total_storage_requests",
          "title": "Total Storage Requests",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "name": "v1_get_usage_api_count_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/usage.api-counts",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "usage.api-counts"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "usage.api-counts"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "interval",
                    "orig": "interval",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1day"
                  }
                ]
              },
              "select": {
                "exist": [
                  "interval",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_get_usage_api_requests_count_response_output": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$NUMBER`",
          "req": true
        }
      ],
      "name": "v1_get_usage_api_requests_count_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/analytics/endpoints/usage.api-requests-count",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "analytics"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "lit": "usage.api-requests-count"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "analytics",
                "endpoints",
                "usage.api-requests-count"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_list_entitlements_response_output": {
      "fields": [
        {
          "name": "config",
          "title": "Config",
          "type": "`$ANY`",
          "req": true
        },
        {
          "name": "feature",
          "title": "Feature",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "hasAccess",
          "title": "Has Access",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_list_entitlements_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations/{slug}/entitlements",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "entitlements"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{slug}",
                "entitlements"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.entitlements`"
              },
              "args": {
                "params": [
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  }
                ]
              },
              "select": {
                "exist": [
                  "slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "v1_list_migrations_response_output": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_list_migrations_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/migrations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "migrations"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "migrations"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_organization_member_response_output": {
      "fields": [
        {
          "name": "avatar_url",
          "title": "Avatar Url",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`"
        },
        {
          "name": "mfa_enabled",
          "title": "Mfa Enabled",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "role_name",
          "title": "Role Name",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "user_name",
          "title": "User Name",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_organization_member_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations/{slug}/members",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "members"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{slug}",
                "members"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  }
                ]
              },
              "select": {
                "exist": [
                  "slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "v1_organization_slug_response_output": {
      "fields": [
        {
          "name": "allowed_release_channels",
          "title": "Allowed Release Channels",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Deprecated: Use `slug` instead.",
          "deprecated": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "opt_in_tags",
          "title": "Opt In Tags",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "plan",
          "title": "Plan",
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization slug"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "v1_organization_slug_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/organizations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                }
              ],
              "parts": [
                "v1",
                "organizations"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "name": "`reqdata.name`"
                },
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                }
              ],
              "parts": [
                "v1",
                "organizations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/organizations/{slug}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "slug"
                }
              ],
              "parts": [
                "v1",
                "organizations",
                "{slug}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "tsrqponmlkjihgfedcba"
                  }
                ]
              },
              "select": {
                "exist": [
                  "slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "v1_pgbouncer_config_response_output": {
      "fields": [
        {
          "name": "connection_string",
          "title": "Connection String",
          "type": "`$STRING`"
        },
        {
          "name": "default_pool_size",
          "title": "Default Pool Size",
          "type": "`$INTEGER`"
        },
        {
          "name": "ignore_startup_parameters",
          "title": "Ignore Startup Parameters",
          "type": "`$STRING`"
        },
        {
          "name": "max_client_conn",
          "title": "Max Client Conn",
          "type": "`$INTEGER`"
        },
        {
          "name": "pool_mode",
          "title": "Pool Mode",
          "type": "`$STRING`"
        },
        {
          "name": "query_wait_timeout",
          "title": "Query Wait Timeout",
          "type": "`$INTEGER`"
        },
        {
          "name": "reserve_pool_size",
          "title": "Reserve Pool Size",
          "type": "`$INTEGER`"
        },
        {
          "name": "server_idle_timeout",
          "title": "Server Idle Timeout",
          "type": "`$INTEGER`"
        },
        {
          "name": "server_lifetime",
          "title": "Server Lifetime",
          "type": "`$INTEGER`"
        }
      ],
      "name": "v1_pgbouncer_config_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/config/database/pgbouncer",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "config"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "pgbouncer"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "config",
                "database",
                "pgbouncer"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_profile_response_output": {
      "fields": [
        {
          "name": "gotrue_id",
          "title": "Gotrue Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "primary_email",
          "title": "Primary Email",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "username",
          "title": "Username",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_profile_response_output",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/profile",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "profile"
                }
              ],
              "parts": [
                "v1",
                "profile"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "v1_project_ref_response_output": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "ref",
          "title": "Ref",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "v1_project_ref_response_output",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_project_with_database_response_output": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Creation timestamp"
        },
        {
          "name": "database",
          "title": "Database",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "db_pass",
          "title": "Db Pass",
          "type": "`$STRING`",
          "req": true,
          "short": "Database password"
        },
        {
          "name": "desired_instance_size",
          "title": "Desired Instance Size",
          "type": "`$STRING`",
          "short": "Desired instance size."
        },
        {
          "name": "high_availability",
          "title": "High Availability",
          "type": "`$BOOLEAN`",
          "short": "[Experimental] Whether to enable high availability for the project."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Deprecated: Use `ref` instead.",
          "deprecated": true
        },
        {
          "name": "kps_enabled",
          "title": "Kps Enabled",
          "type": "`$BOOLEAN`",
          "short": "This field is deprecated and is ignored in this request",
          "deprecated": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of your project"
        },
        {
          "name": "organization_id",
          "title": "Organization Id",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "Deprecated: Use `organization_slug` instead.",
          "deprecated": true
        },
        {
          "name": "organization_slug",
          "title": "Organization Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization slug"
        },
        {
          "name": "plan",
          "title": "Plan",
          "type": "`$STRING`",
          "short": "Subscription Plan is now set on organization level and is ignored in this request",
          "deprecated": true
        },
        {
          "name": "postgres_engine",
          "title": "Postgres Engine",
          "type": "`$NULL`",
          "deprecated": true
        },
        {
          "name": "ref",
          "title": "Ref",
          "type": "`$STRING`",
          "req": true,
          "short": "Project ref"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "short": "Region of your project",
          "deprecated": true
        },
        {
          "name": "region_selection",
          "title": "Region Selection",
          "type": "`$ANY`",
          "short": "Region selection."
        },
        {
          "name": "release_channel",
          "title": "Release Channel",
          "type": "`$NULL`",
          "deprecated": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "template_url",
          "title": "Template Url",
          "type": "`$STRING`",
          "short": "Template URL used to create the project from the CLI.",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "v1_project_with_database_response_output",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/claim-token",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "claim-token"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "claim-token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "claim_token",
                "exist": [
                  "ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/pause",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "pause"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "pause"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "pause",
                "exist": [
                  "ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/restart",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "restart"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "restart"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "restart",
                "exist": [
                  "ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "v1",
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "db_pass": "`reqdata.db_pass`",
                  "desired_instance_size": "`reqdata.desired_instance_size`",
                  "high_availability": "`reqdata.high_availability`",
                  "kps_enabled": "`reqdata.kps_enabled`",
                  "name": "`reqdata.name`",
                  "organization_id": "`reqdata.organization_id`",
                  "organization_slug": "`reqdata.organization_slug`",
                  "plan": "`reqdata.plan`",
                  "postgres_engine": "`reqdata.postgres_engine`",
                  "region": "`reqdata.region`",
                  "region_selection": "`reqdata.region_selection`",
                  "release_channel": "`reqdata.release_channel`",
                  "template_url": "`reqdata.template_url`"
                },
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "v1",
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/projects/{ref}/claim-token",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "claim-token"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "claim-token"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "claim_token",
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/v1/projects/{ref}/jit-access",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "jit-access"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "jit-access"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "jit_access",
                "exist": [
                  "ref"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/postgrest",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "postgrest"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "postgrest"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "$action": "postgrest",
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_restore_point": {
      "fields": [
        {
          "name": "completed_on",
          "title": "Completed On",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_restore_point",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/projects/{ref}/database/backups/restore-point",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "restore-point"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "restore-point"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/database/backups/restore-point",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "backups"
                },
                {
                  "lit": "restore-point"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "backups",
                "restore-point"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "name",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_service_health_response_output": {
      "fields": [
        {
          "name": "error",
          "title": "Error",
          "type": "`$STRING`"
        },
        {
          "name": "healthy",
          "title": "Healthy",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Deprecated.",
          "deprecated": true
        },
        {
          "name": "info",
          "title": "Info",
          "type": "`$ANY`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_service_health_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/health",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "health"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "health"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ],
                "query": [
                  {
                    "name": "service",
                    "orig": "services",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true,
                    "example": [
                      "auth,db",
                      "auth"
                    ]
                  },
                  {
                    "name": "timeout_m",
                    "orig": "timeout_ms",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 2000
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref",
                  "service",
                  "timeout_m"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_storage_bucket_response_output": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "owner",
          "title": "Owner",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "public",
          "title": "Public",
          "type": "`$BOOLEAN`",
          "req": true
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "v1_storage_bucket_response_output",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/storage/buckets",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "storage"
                },
                {
                  "lit": "buckets"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "storage",
                "buckets"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "v1_update_password_response_output": {
      "fields": [
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "password",
          "title": "Password",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "v1_update_password_response_output",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/projects/{ref}/database/password",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "database"
                },
                {
                  "lit": "password"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{project_id}",
                "database",
                "password"
              ],
              "rename": {
                "param": {
                  "ref": "project_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "vanity_subdomain": {
      "fields": [
        {
          "name": "custom_domain",
          "title": "Custom Domain",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "name": "vanity_subdomain",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/projects/{ref}/vanity-subdomain",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "ref"
                },
                {
                  "lit": "vanity-subdomain"
                }
              ],
              "parts": [
                "v1",
                "projects",
                "{ref}",
                "vanity-subdomain"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "ref",
                    "orig": "ref",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "abcdefghijklmnopqrst"
                  }
                ]
              },
              "select": {
                "exist": [
                  "ref"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

