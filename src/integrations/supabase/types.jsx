/**
 * @typedef {string | number | boolean | null | {[key: string]: Json | undefined} | Json[]} Json
 */

/**
 * @typedef {Object} Database
 * @property {Object} __InternalSupabase
 * @property {string} __InternalSupabase.PostgrestVersion
 * @property {Object} public
 * @property {Object} public.Tables
 * @property {Object} public.Tables.projects
 * @property {ProjectRow} public.Tables.projects.Row
 * @property {ProjectInsert} public.Tables.projects.Insert
 * @property {ProjectUpdate} public.Tables.projects.Update
 * @property {Array} public.Tables.projects.Relationships
 * @property {Object} public.Views
 * @property {Object} public.Functions
 * @property {Object} public.Enums
 * @property {Object} public.CompositeTypes
 */

/**
 * @typedef {Object} ProjectRow
 * @property {string | null} business_strategy
 * @property {string | null} cost_prediction
 * @property {string} created_at
 * @property {string} id
 * @property {string | null} legal_considerations
 * @property {string | null} market_analysis
 * @property {string | null} monetization
 * @property {string} startup_idea
 * @property {string} status
 * @property {string | null} strategist_critique
 * @property {string | null} target_market
 * @property {string | null} tech_stack
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ProjectInsert
 * @property {string | null} [business_strategy]
 * @property {string | null} [cost_prediction]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string | null} [legal_considerations]
 * @property {string | null} [market_analysis]
 * @property {string | null} [monetization]
 * @property {string} startup_idea - Required field
 * @property {string} [status]
 * @property {string | null} [strategist_critique]
 * @property {string | null} [target_market]
 * @property {string | null} [tech_stack]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ProjectUpdate
 * @property {string | null} [business_strategy]
 * @property {string | null} [cost_prediction]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string | null} [legal_considerations]
 * @property {string | null} [market_analysis]
 * @property {string | null} [monetization]
 * @property {string} [startup_idea]
 * @property {string} [status]
 * @property {string | null} [strategist_critique]
 * @property {string | null} [target_market]
 * @property {string | null} [tech_stack]
 * @property {string} [updated_at]
 */

/**
 * Constants object containing database enums and other constant values
 * @type {{public: {Enums: {}}}}
 */
export const Constants = {
  public: {
    Enums: {},
  },
};