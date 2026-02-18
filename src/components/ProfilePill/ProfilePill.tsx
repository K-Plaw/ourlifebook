import React from "react";
import Image from "next/image";
import "./ProfilePill.css";

interface ProfilePillProps {
  username: string;
  nickname: string;
  familyRole: string;
  familyName: string;
  avatarSrc: string;
  isAdmin?: boolean;
  adminBadgeSrc?: string;
  onAdminClick?: () => void;
}

const onAdminClick = () => {
  alert("Admin badge clicked!");
};

const ProfilePill: React.FC<ProfilePillProps> = ({
  username,
  nickname,
  familyRole,
  familyName,
  avatarSrc,
  isAdmin = false,
  onAdminClick,


}) => {
  return (
    <div className="profile-pill">
      {/* Avatar */}
      <div className="profile-avatar">
        <Image
          src={avatarSrc || "/default-avatar.png"}
          alt={`${username} avatar`}
          width={60}
          height={60}
        />
      </div>

      {/* Info Section */}
      <div className="profile-info">
        <div className="profile-main-row">
          <div className="profile-text-block">
            <div className="username-row">
              <span className="username">{username}</span>
            </div>
            <div className="nickname">
              <span className="nickname">({nickname})</span>
            </div>
            <div className="role-pill">{familyRole}</div>
          </div>

          {isAdmin && (
            <div className="admin-badge" onClick={onAdminClick}>
              <div className="admin-badge-img">
                <Image
                  src="/assets/admin-badge-balanced.png"
                  alt="Admin badge"
                  fill
                  sizes="40px"
                  style={{ objectFit: "contain" }}
                />
              </div>

            </div>
          )}
        </div>

        {/* Family Name */}
        <div className="family-pill">The {familyName}'s</div>
      </div>
    </div>
  );
};

export default ProfilePill;
