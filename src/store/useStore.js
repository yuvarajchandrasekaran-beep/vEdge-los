import { create } from 'zustand';
import {
  INITIAL_LOS_RECORDS,
  INITIAL_LOS_ASSESSMENT_ITEMS,
  INITIAL_LOS_CONTROLS,
  INITIAL_KRI_ASSESSMENTS,
  INITIAL_LOS_SUB_RISKS,
  INITIAL_ACTION_PLANS,
  INITIAL_WORKFLOW_TASKS,
  INITIAL_NOTIFICATIONS,
  LOS_VERSIONS,
  CHANGE_LOG,
  CONTROLS,
} from '../data/mockData';

const generateId = () => `id_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

const useStore = create((set, get) => ({
  // ── Data ──────────────────────────────────────────────────────────────────
  losRecords: INITIAL_LOS_RECORDS,
  losAssessmentItems: INITIAL_LOS_ASSESSMENT_ITEMS,
  losControls: INITIAL_LOS_CONTROLS,
  kriAssessments: INITIAL_KRI_ASSESSMENTS,
  losSubRisks: INITIAL_LOS_SUB_RISKS,
  actionPlans: INITIAL_ACTION_PLANS,
  workflowTasks: INITIAL_WORKFLOW_TASKS,
  notifications: INITIAL_NOTIFICATIONS,
  losVersions: LOS_VERSIONS,
  changeLog: CHANGE_LOG,
  controls: CONTROLS,

  // ── LOS Record Operations ─────────────────────────────────────────────────
  createLOS: (data, userId) => {
    const newLOS = {
      id: generateId(),
      ...data,
      status: 'Draft',
      versionNumber: 1,
      createdBy: userId,
      createdAt: new Date().toISOString(),
      updatedBy: userId,
      updatedAt: new Date().toISOString(),
    };
    set(s => ({ losRecords: [...s.losRecords, newLOS] }));
    return newLOS;
  },

  updateLOS: (losId, updates, userId) => {
    set(s => ({
      losRecords: s.losRecords.map(l =>
        l.id === losId
          ? { ...l, ...updates, updatedBy: userId, updatedAt: new Date().toISOString() }
          : l
      ),
    }));
    // Log changes
    if (updates.status) {
      const entry = {
        id: generateId(),
        losId,
        losVersionId: null,
        fieldName: 'status',
        oldValue: get().losRecords.find(l => l.id === losId)?.status ?? '',
        newValue: updates.status,
        changedBy: userId,
        changedAt: new Date().toISOString(),
        changeType: 'Update',
      };
      set(s => ({ changeLog: [...s.changeLog, entry] }));
    }
  },

  deleteLOS: (losId) => {
    set(s => ({
      losRecords: s.losRecords.filter(l => l.id !== losId),
      losAssessmentItems: s.losAssessmentItems.filter(i => i.losId !== losId),
      losControls: s.losControls.filter(c => c.losId !== losId),
      kriAssessments: s.kriAssessments.filter(k => k.losId !== losId),
      losSubRisks: s.losSubRisks.filter(r => r.losId !== losId),
    }));
  },

  // ── LOS Assessment Items ──────────────────────────────────────────────────
  updateAssessmentItem: (itemId, updates, userId) => {
    set(s => ({
      losAssessmentItems: s.losAssessmentItems.map(item =>
        item.id === itemId
          ? { ...item, ...updates, updatedBy: userId, updatedAt: new Date().toISOString() }
          : item
      ),
    }));
  },

  upsertAssessmentItem: (losId, itrId, updates, userId) => {
    const existing = get().losAssessmentItems.find(i => i.losId === losId && i.itrId === itrId);
    if (existing) {
      get().updateAssessmentItem(existing.id, updates, userId);
    } else {
      const newItem = {
        id: generateId(),
        losId,
        itrId,
        applicability: 'Applicable',
        reasonAndScope: '',
        ...updates,
        updatedBy: userId,
        updatedAt: new Date().toISOString(),
      };
      set(s => ({ losAssessmentItems: [...s.losAssessmentItems, newItem] }));
    }
  },

  // ── LOS Controls ──────────────────────────────────────────────────────────
  updateLOSControl: (lcId, updates, userId) => {
    set(s => ({
      losControls: s.losControls.map(c =>
        c.id === lcId
          ? { ...c, ...updates, updatedBy: userId, updatedAt: new Date().toISOString() }
          : c
      ),
    }));
  },

  addLOSControl: (losId, controlId, userId) => {
    const newCtrl = {
      id: generateId(),
      losId,
      controlId,
      effectiveness: 'Effective',
      comments: '',
      isAdhoc: false,
      updatedBy: userId,
      updatedAt: new Date().toISOString(),
    };
    set(s => ({ losControls: [...s.losControls, newCtrl] }));
    return newCtrl;
  },

  removeLOSControl: (lcId) => {
    set(s => ({ losControls: s.losControls.filter(c => c.id !== lcId) }));
  },

  // ── Sub-Risks ─────────────────────────────────────────────────────────────
  addSubRisk: (losId, riskId, userId) => {
    const exists = get().losSubRisks.some(r => r.losId === losId && r.riskId === riskId);
    if (exists) return false;
    const newSR = { id: generateId(), losId, riskId, addedBy: userId, addedAt: new Date().toISOString() };
    set(s => ({ losSubRisks: [...s.losSubRisks, newSR] }));
    return true;
  },

  removeSubRisk: (lsrId) => {
    set(s => ({ losSubRisks: s.losSubRisks.filter(r => r.id !== lsrId) }));
  },

  // ── KRI Assessments ───────────────────────────────────────────────────────
  upsertKRIAssessment: (losId, indicatorId, updates, userId) => {
    const existing = get().kriAssessments.find(k => k.losId === losId && k.indicatorId === indicatorId);
    if (existing) {
      set(s => ({
        kriAssessments: s.kriAssessments.map(k =>
          k.id === existing.id
            ? { ...k, ...updates, updatedBy: userId, updatedAt: new Date().toISOString() }
            : k
        ),
      }));
    } else {
      set(s => ({
        kriAssessments: [...s.kriAssessments, {
          id: generateId(), losId, indicatorId, currentValue: '', aboveToleranceFlag: false,
          ...updates, updatedBy: userId, updatedAt: new Date().toISOString(),
        }],
      }));
    }
  },

  // ── Action Plans ──────────────────────────────────────────────────────────
  createActionPlan: (data, userId) => {
    const newAP = {
      id: generateId(),
      ...data,
      status: 'Open',
      createdAt: new Date().toISOString(),
    };
    set(s => ({ actionPlans: [...s.actionPlans, newAP] }));
    return newAP;
  },

  updateActionPlan: (apId, updates) => {
    set(s => ({
      actionPlans: s.actionPlans.map(a => a.id === apId ? { ...a, ...updates } : a),
    }));
  },

  deleteActionPlan: (apId) => {
    set(s => ({ actionPlans: s.actionPlans.filter(a => a.id !== apId) }));
  },

  // ── Workflow Tasks ─────────────────────────────────────────────────────────
  updateWorkflowTask: (taskId, updates) => {
    set(s => ({
      workflowTasks: s.workflowTasks.map(t => t.id === taskId ? { ...t, ...updates } : t),
    }));
  },

  // ── Notifications ─────────────────────────────────────────────────────────
  markNotificationRead: (notifId) => {
    set(s => ({
      notifications: s.notifications.map(n => n.id === notifId ? { ...n, isRead: true } : n),
    }));
  },
  markAllNotificationsRead: (userId) => {
    set(s => ({
      notifications: s.notifications.map(n => n.userId === userId ? { ...n, isRead: true } : n),
    }));
  },

  // ── Add Control to Library ────────────────────────────────────────────────
  addControl: (data) => {
    const newCtrl = { id: generateId(), ...data, status: 'Active' };
    set(s => ({ controls: [...s.controls, newCtrl] }));
    return newCtrl;
  },
}));

export default useStore;
