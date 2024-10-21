/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ActionStatus } from './action-status';
import { ActionStatusReasonCode } from './action-status-reason-code';

/**
 * Action step executed on server
 * @export
 * @interface ActionStep
 */
export interface ActionStep {
    /**
     * The unique id of the action step
     * @type {number}
     * @memberof ActionStep
     */
    id: number;
    /**
     * The unique id of the action linked to this step
     * @type {number}
     * @memberof ActionStep
     */
    action_id: number;
    /**
     * The unique id of the action target linked to this step
     * @type {number}
     * @memberof ActionStep
     */
    action_target_id: number;
    /**
     * Name of the action describing your purpose
     * @type {string}
     * @memberof ActionStep
     */
    name: string;
    /**
     * The execution order of the given step
     * @type {number}
     * @memberof ActionStep
     */
    order: number;
    /**
     * 
     * @type {ActionStatus}
     * @memberof ActionStep
     */
    status: ActionStatus;
    /**
     * Human readable version of the action status
     * @type {string}
     * @memberof ActionStep
     */
    status_human_readable?: string;
    /**
     * 
     * @type {ActionStatusReasonCode}
     * @memberof ActionStep
     */
    status_reason_code?: ActionStatusReasonCode;
    /**
     * Human readable version of the status reason code
     * @type {string}
     * @memberof ActionStep
     */
    status_reason_human_readable?: string;
    /**
     * The date and time when the action started execution (i.e., left the `pending/queued` status)
     * @type {string}
     * @memberof ActionStep
     */
    started_at?: string | null;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof ActionStep
     */
    completed_at?: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ActionStep
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ActionStep
     */
    updated_at?: string;
}

