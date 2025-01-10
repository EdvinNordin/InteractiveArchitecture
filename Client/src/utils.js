import * as THREE from "three";

export function clamp(x, a, b) {
    return Math.min(Math.max(x, a), b);
}

export function applyQuaternion(vec, quat) {
    const x = vec.x, y = vec.y, z = vec.z;
    const qx = quat.x, qy = quat.y, qz = quat.z, qw = quat.w;

    // calculate quat * vec
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    vec.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    vec.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    vec.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return vec;
}


export function getYawRotation(rotation) {
    const incomingQuaternion = new THREE.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w);

    // Convert the quaternion to Euler angles
    const euler = new THREE.Euler().setFromQuaternion(incomingQuaternion, 'YXZ'); // Clone it here

    const yaw = euler.y;

    // Return yaw rotation as a quaternion
    const yawRot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

    return yawRot;
}

export function getPitchRotation(rotation) {
    const incomingQuaternion = new THREE.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w);

    const euler = new THREE.Euler().setFromQuaternion(incomingQuaternion, 'YXZ'); // YXZ order to prioritize horizontal rotation

    const pitch = -euler.x;  // Rotations around X-axis (vertical)
    // Apply pitch to the head
    const pitchRot = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitch);

    return pitchRot;
}